0. `mkdir hello-ncurses`, `cd hello-ncurses`.
1. `wget ftp://ftp.invisible-island.net/ncurses/ncurses-6.1.tar.gz`
2. `tar xf ncurses-6.1.tar.gz`
3. `cd ncurses-6.1`

# How to Compile ncurses

## Emscripten's `getenv` is not Reentrant

Ncurses expects getenv to be reentrant, but emscripten doesn't provide it.
You may vote for a [request](https://github.com/kripken/emscripten/issues/6778) to provide reentrance.
So, the first thing would be to patch emscripten getenv to be reentrant:
1) `vim emsdk/emscripten/1.38.8/system/include/libc/stdlib.h`
2) Replace line `char *getenv (const char *);` with this block:
```c
#pragma push_macro("getenv")
#undef getenv
char *getenv (const char *);
#pragma pop_macro("getenv")

#ifndef getenv
#include <string.h>
#define getenv(name) (char*)({\
\
  char* volat = getenv(name);\
  int vlen = strlen(volat) + 1;\
  char* dest = (char*)malloc(vlen * sizeof(char));\
  strcpy(dest, volat);\
  dest;\
})
#endif
```
3. run `emcc --clear-cache` and try to compile hello world after it to rebuild the cache.

## Understanding

From https://kripken.github.io/emscripten-site/docs/compiling/Building-Projects.html:
> Some large projects generate executables and run them in order to generate input for later parts of the build process (for example, a parser may be built and then run on a grammar, which then generates C/C++ code that implements that grammar). This sort of build process causes problems when using Emscripten because you cannot directly run the code you are generating.

> The simplest solution is usually to build the project twice: once natively, and once to JavaScript. When the JavaScript build procedure fails because a generated executable is not present, you can then copy that executable from the native build, and continue to build normally. This approach was successfully used for compiling Python (see tests/python/readme.md for more details).

From `INSTALL`:
> BUILDING NCURSES WITH A CROSS-COMPILER  
  Ncurses can be built with a cross-compiler.  Some parts must be built
  with the host's compiler since they are used for building programs
  (e.g., ncurses/make_hash and ncurses/make_keys) that generate tables
  that are compiled into the ncurses library.  The essential thing to do
  is set the BUILD_CC environment variable to your host's compiler, and
  run the configure script configuring for the cross-compiler.

>  The configure options --with-build-cc, etc., are provided to make this
  simpler.  Since make_hash and make_keys use only ANSI C features, it
  is normally not necessary to provide the other options such as
  --with-build-libs, but they are provided for completeness.

1. I don't know how to get use of `--with-build-cc` for compiling only two targets (`make_hash` and `make_keys`).
2. In addition to `make_keys` and `make_hash` you will need to compile to x86 `report_offsets` also.
You will also need terminfo database which I believe can't be compiled with `emmake make install`, so you have to use bare `make` and `make install` (not sure, should be checked).
3. `mkdir ./INSTALLED`
4. ``./configure --prefix=`pwd`/INSTALLED``
5. `make`
6. `make install`
7. `mkdir ../lib`
8. `cp -r INSTALLED/share/terminfo ../lib/.`
9. `cd ncurses`
10. `cp make_hash make_hash_x86`
11. `cp make_keys make_keys_x86`
12. `cp report_offsets report_offsets_x86`
13. `cd ..`
14. `make clean`
15. `cd ncurses`.
16. Now in `./ncurses` dir you should have `make_hash_x86`, `make_keys_x86` and `report_offsets_x86`.
17. `vim tinfo/MKcaptab.sh` and
<details>
  <summary>make the following changes:</summary>

```sh-session
./make_hash 1 info $OPT1 <$DATA
./make_hash 3 cap  $OPT1 <$DATA
```
replace on:
```sh-session
./make_hash_x86 1 info $OPT1 <$DATA
./make_hash_x86 3 cap  $OPT1 <$DATA
```
</details>

18. `vim Makefile.in` and
<details>
  <summary>make the following changes:</summary>

```sh-session
init_keytry.h: make_keys$(BUILD_EXEEXT) keys.list
  ./make_keys$(BUILD_EXEEXT) keys.list > $@
```
replace on:
```sh-session
init_keytry.h: make_keys$(BUILD_EXEEXT) keys.list
  ./make_keys_x86$(BUILD_EXEEXT) keys.list > $@
```
and
```sh-session
report_offsets$(BUILD_EXEEXT) : \
    $(srcdir)/report_offsets.c
  $(BUILD_CC) -o $@ $(BUILD_CPPFLAGS) $(BUILD_CCFLAGS) $(srcdir)/report_offsets.c $(BUILD_LDFLAGS) $(BUILD_LIBS)
  ./report_offsets$(BUILD_EXEEXT)
```
replace on:
```sh-session
report_offsets$(BUILD_EXEEXT) : \
    $(srcdir)/report_offsets.c
  $(BUILD_CC) -o $@ $(BUILD_CPPFLAGS) $(BUILD_CCFLAGS) $(srcdir)/report_offsets.c $(BUILD_LDFLAGS) $(BUILD_LIBS)
  ./report_offsets_x86$(BUILD_EXEEXT)
```
</details>

19. `cd ..`, `make clean`, `emconfigure ./configure`.
20. `emmake make`
21. `cd ../`
22. `vim hello.c`:
```c
#include <curses.h>

int main()
{
  // See https://linux.die.net/man/3/curs_trace.
  // Write debug messages to the ./trace file:
  trace(TRACE_MAXIMUM); 

  initscr();      /* Start curses mode      */
  printw("Hello World !!!");  /* Print Hello World      */
  refresh();      /* Print it on to the real screen */
  getch();      /* Wait for user input */
  endwin();     /* End curses mode      */

  return 0;
}
```
23. `wget https://github.com/kripken/emscripten/blob/master/src/shell_minimal.html -O min-shell.html` (the link is from [here](https://kripken.github.io/emscripten-site/docs/compiling/Deploying-Pages.html)).
24. `vim min-shell.html`, add:
```js
...
var Module = {
  preRun: [function() {ENV.TERM='xterm-new'}],
...
```
  Also add [xterm.js](https://github.com/xtermjs/xterm.js), look at [./min-shell.html](./min-shell.html) for details.  
25. Compile with `emcc ./hello.c -L ./ncurses-6.1/lib -I ./ncurses-6.1/include -lncurses_g --preload-file lib/terminfo@/home/web_user/.terminfo -o hello.html -s FORCE_FILESYSTEM=1 --shell-file ./min-shell.html`. `lncurses_g` is used for outputting debug messages. If this doesn't work for you, look up compile command in the [./hello2.sh](./hello2.sh).  
26. Run your favorite http server from `./`, open http://localhost:YOUR_PORT/hello.html in a browser.

# ncurses for emscripten

ncurses 6.1 compiled by emscripten for usage in a browser. They are compiled, loaded, but don't work! You are wanted to make it work!

# HowTo

1. Install emscripten, [instructions](https://webassembly.org/getting-started/developers-guide/).
2. Activate emscripten by `source emsdk_env.sh`.
2. Compile ncurses app source files:
```sh-session
vim hello.c
vim min-shell.html
./hello.sh
# If you get error like:
#   stdlib.h:51:7: error: expected identifier or '('
#   char *getenv (const char *);
# Then just comment out that line 51 in stdlib.h.
# Launch your favorite http-server to serve ./ (mine is: https://www.npmjs.com/package/http-server)
open http://localhost:8080/index.html
```


# If You Want to Compile ncurses Yourself or Get More Debug Info from ncurses

https://github.com/kripken/emscripten/issues/6766

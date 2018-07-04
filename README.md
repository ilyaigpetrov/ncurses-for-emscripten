# ncurses for emscripten

ncurses 6.1 compiled by emscripten for usage in a browser.

# HowTo

1. Install emscripten, [instructions](https://webassembly.org/getting-started/developers-guide/).
2. Compile ncurses source files:
```sh-session
vim hello.c
vim min-shell.html
./hello.sh
open http://localhost:8080/out.html
```


# If You Want to Compile ncurses Yourself

https://github.com/kripken/emscripten/issues/6766

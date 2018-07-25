# ncurses for emscripten

ncurses 6.1 compiled by emscripten for usage in a browser. They are compiled, loaded, but don't work! You are wanted to make it work!

# HowTo

1. Install emscripten, [instructions](https://webassembly.org/getting-started/developers-guide/).
2. Activate emscripten by `source emsdk_env.sh`.
3. Compile ncurses app source files:
```sh-session
vim hello.c
vim min-shell.html
./hello2.sh
# Launch your favorite http-server to serve ./ (mine is: https://www.npmjs.com/package/http-server)
# Open http://localhost:<YOUR_PORT>/hello.html in the browser
```
4. Alternative way:
```sh-session
./hello.sh
# Launch your favorite http-server to serve ./ (mine is: https://www.npmjs.com/package/http-server)
# Open http://localhost:<YOUR_PORT>/index.html in the browser
```

# About `hello2.sh`, `worm2.sh`, `*2.sh`

These files make use of `./min-shell.html` and compile to `hello.html`, `worm.html`, `*.html`.
Sometimes `index.html` fails, but `min-shell.html` works, that's why I recommend `*2.sh` files for a robust experience.

---------------------

[If You Want to Compile ncurses Yourself or Get More Debug Info from ncurses](./COMPILE.md)


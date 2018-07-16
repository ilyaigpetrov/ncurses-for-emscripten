emcc ./example.c \
  -L ncurses-6.1-llvm/lib \
  -I ncurses-6.1-llvm/include \
  -lncurses_g \
  --preload-file lib/terminfo@/home/web_user/.terminfo \
  -o compiled.js \
  -g4 \
  -s ALLOW_MEMORY_GROWTH=1 \
  -s WASM=1

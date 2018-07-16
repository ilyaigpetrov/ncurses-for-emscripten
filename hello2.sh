emcc ./hello.c \
  -L ./ncurses-6.1-llvm/lib \
  -I ./ncurses-6.1-llvm/include \
  -lncurses_g \
  --preload-file lib/terminfo@/home/web_user/.terminfo \
  -o hello.html \
  -g4 \
  -s WASM=1 \
  -s ALLOW_MEMORY_GROWTH=1 \
  --shell-file ./min-shell.html

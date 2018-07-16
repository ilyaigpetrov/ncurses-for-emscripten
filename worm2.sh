cd ncurses-6.1-llvm/test/
emcc ./worm_debug.c \
  -L ../lib \
  -I ./ \
  -I ../include \
  -lncurses_g \
  --preload-file ../../lib/terminfo@/home/web_user/.terminfo \
  -o ../../worm.html \
  -g4 \
  -s WASM=0 \
  -s ALLOW_MEMORY_GROWTH=1 \
  --shell-file ../../min-shell.html \
  -Werror \
  -s ASSERTIONS=2

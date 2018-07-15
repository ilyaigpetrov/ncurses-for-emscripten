cd ncurses-6.1-llvm/test/
emcc ./worm_debug.c \
  -L ../lib \
  -I ./ \
  -I ../include \
  -lncurses_g \
  --preload-file ../../lib/terminfo@/home/web_user/.terminfo \
  -o ../../worm.html \
  -Ugetenv \
  -D"getenv(name)=(char*) EM_ASM_INT ( {var envar = JSON.stringify(name);var ret=allocate(intArrayFromString(envar), 'i8', ALLOC_NORMAL);return ret ;},NULL)" \
  -g4 \
  -s WASM=0 \
  -s ALLOW_MEMORY_GROWTH=1 \
  --shell-file ../../min-shell.html \
  -Werror \
  -s ASSERTIONS=2

# source ../../emsdk_env.sh
emcc ./hello.c -I ncurses-6.1-llvm/test -L ./ncurses-6.1-llvm/lib -I ./ncurses-6.1-llvm/include -lncurses_g --preload-file lib/terminfo@/home/web_user/.terminfo -o hello.html -s FORCE_FILESYSTEM=1 -Ugetenv -D"getenv(name)=(char*) EM_ASM_INT ( {var envar = JSON.stringify(name);var ret=allocate(intArrayFromString(envar), 'i8', ALLOC_NORMAL);return ret ;},NULL)" --shell-file ./min-shell.html -g4 -s ASSERTIONS=2 -s WASM=1 -Werror -s ALLOW_MEMORY_GROWTH=1 --emrun
emrun --no_browser --port 8080 .

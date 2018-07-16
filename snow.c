#ifdef __EMSCRIPTEN__
#include <stdio.h>
#include <stdlib.h>
#endif

#include <curses.h>

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#endif

void do_one_iteration() {
  mvprintw(5, 5, "*\n");
  refresh();
}

int main() {

  trace(TRACE_MAXIMUM);

  initscr();
  cbreak();
  noecho();
  curs_set(0);

#ifdef __EMSCRIPTEN__
  // void emscripten_set_main_loop(em_callback_func func, int fps, int simulate_infinite_loop);
  emscripten_set_main_loop(do_one_iteration, 0, 1);
#else
  while (1) {
    do_one_iteration();
  }
#endif

  endwin();

  return 0;
}

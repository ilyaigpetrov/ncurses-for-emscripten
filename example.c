#include <curses.h>

int main() {

  // trace(TRACE_MAXIMUM);
  initscr();
  //resize_term(24, 80);
  printw("- (0, 0)\n");

  start_color();
  init_pair(1, COLOR_RED, COLOR_GREEN);
  attron(COLOR_PAIR(1));
  mvprintw(10, 40, "(10, 40)\n");
  attroff(COLOR_PAIR(1));

  refresh();
  endwin();

  return 0;
}

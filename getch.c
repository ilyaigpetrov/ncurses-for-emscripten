#include <curses.h>
#include <stdio.h>
#include <stdlib.h>
#include <emscripten.h>

int main()
{

  trace(TRACE_MAXIMUM);

  initscr();      /* Start curses mode      */
  printw("Provide us a character!\n");
  int ch = getch();
  printw("Hello World !!!\n");  /* Print Hello World      */
  //printw("Hello World !!!\n\rFOOOBAR\n");  /* Print Hello World      */
  //printw("BAZ");  /* Print Hello World      */
  refresh();      /* Print it on to the real screen */
  //getch();      /* Wait for user input */
  endwin();     /* End curses mode      */

  return 0;
}

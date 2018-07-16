#include <stdio.h>
#include <stdlib.h>

int main() {

  setenv("TERM", "xterm-new", 1);
  char* tname = getenv("TERM");
  printf("tname=%s\n", tname);
  getenv("HOME"); // BOOM!
  printf("tname=%s\n", tname);

  return 0;
}

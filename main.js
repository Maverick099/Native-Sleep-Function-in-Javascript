//sleepfunction
//Call this function whenever you need to delay some time between lines of code execution.
//Technically this makes the program execution to go to sleep.


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

/*
JavaScript Programs
A computer program is a list of "instructions" to be "executed" by a computer.
In a programming language, these programming instructions are called statements.
A JavaScript program is a list of programming statements.

*/

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "monday";
    break;
  case 2:
    dayName = "tuesday";
    break;
  case 3:
    dayName = "Wesday";
    break;

  default:
    dayName = "Unknown!";
}
console.log(dayName);

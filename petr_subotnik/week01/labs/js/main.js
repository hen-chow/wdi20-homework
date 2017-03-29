// var printTriangle = function(number){
//   for(var i=0;i<number;i++){
//   console.log("*");
//   }
// }
//
//   printTriangle(5);

// var isEven = function(number){
//   return number % 2 == 0;
// }
//
//
// for(var i=0;i<21;i++){
//   if(isEven(i)){
//   console.log(i + ' is even');
//  }else{
//   console.log(i + ' is odd');
//  }
// }


var wdi20 = [
  [null, null, null, null, "kevin", null],
  ["luke", null, "jared", "hen", "diego"],
  [null, null, null, "peach"],
  [null, "petr", null, null]
]

for(var x = 0;x<wdi20.length;x++){
  for(var y = 0;y<wdi20[x].length;y++){
    console.log("Row " + (x + 1) + " Seat " + (y + 1) + ": " + wdi20[x][y])
  }
}



// AFTERNOON LAB!
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
//
//
var favorites = ['red','blue','green'];

for(var x = 0; x < favorites.length; x++){
  console.log("My #" + (x + 1) + " choise is " + favorites[x]);
}


// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
//
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true


// var leapYear = (1996)



// var isLeapYear = function(year){
//   //if ((year% 4 === 0) && !(year % 100 === 0) || (year % 400 === 0)){
// //
// //     return true
// //   }else {
// //     return false
// //   }
// //
// // }
//
//     if (year % 4 === 0){
//
//     if (year % 100 === 0) && !(year % 400 === 0){
//       return false;
//     }else{
//       return true;
//     }
//   } else {
//     return false;
// };
//
// console.log();
// console.log( isLeapYear(1996));
// console.log( isLeapYear(1997));
// console.log( isLeapYear(1900));
// console.log( isLeapYear(2000));
//
// var input = prompt(Give me a number);
// console.log(isleapYear(input));
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

var letters = ['f', 'o', 'x'];
var guesses = ['_', '_', '_'];

var guessLetter = function(letter){
  for (var i = 0; i < letters.length; i++) {          //for(i in letters)
    if(letter === letters[i]) {
      // we have a match
      guesses[i] = letter;
      console.log('Congratulation, you have found the letter ' + letter);
//     }
//   } //for
//   console.log(guesses);
// }; // function guessLetter
// guessLetter('x');
//
// the full word has been guessed
// maybe... consider a counter variable that counts how many correct guesses there have been?

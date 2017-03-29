var squareNumber = function(number){
  var result = (number * number);

  console.log("The result of squaring the number " + number + " is " + result);
  return result;
}
squareNumber(3);

var halfNumber = function(number){
  var result = (number / 2);

  console.log("Half of " + number + " is " + result);
  return result;
}

halfNumber(5);

var percentOf = function(number1,number2){
  var result = (number1/number2) * 100;

  console.log(number1 + " is " + result + '% of ' + number2);
  return result;
}
percentOf(2,4);

var areaOfCircle = function(radius){
  var result = Math.PI * radius * radius;

  console.log("The area for a circle with radius 2 " + "is " + result + ".");
  return result;
}

areaOfCircle(2);

var finalHorror = function(number){
  var finalHalf = halfNumber(number);                  //=>3
  var finalSquare = squareNumber(finalHalf);           //=>9
  var finalCircle = areaOfCircle(finalSquare);         //=>254.469
  var finalPercentOf = percentOf(finalSquare, finalCircle);         //=>
  console.log(finalHalf, finalSquare, finalCircle, finalPercentOf);
}
finalHorror(6);




// var drEvil = function(number){
//   if (number = 1000000){
//   console.log(amount + 'dollars' + '(pinky)');
//   }else{
//   console.log(amount + 'dollars');
// }
// drEvil(10);

//
// }
//
// var input = 1755;
// var output = '';
//
// if ( input % 3 === 0 ){
//   //output = output + 'pling'
//   output += 'pling'
// }
//
// if ( input % 5 === 0 ){
//   output += 'plang'
// }
//
// if ( input % 7 === 0 ){
//
//   output += 'pling'
// }
//
// if ( output.lenght === 0){
//   output = input.string(){
//
// }
//
// console.log( output );
//
// var hasFactor = function(number, potentialFactor){
//    var result;
//
//    if(number % potentialFactor === 0){
//      result = true;
//    }else{

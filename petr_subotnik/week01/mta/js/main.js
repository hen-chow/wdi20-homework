//planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

//The program takes the line and stop that a user is getting on at
// and the line and stop that user is getting off at
// and prints the journey and the total number of stops for the trip in the console:

//Get the program to work for a single line before trying to tackle multiple lines!!!!!!!!!!

//The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th



var mta = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
};


var planTrip = function(startLine, startStation, endLine, endStation) {

  if (startLine == endLine) {

     var stations1 = mta[startLine];                                     // each lines(N,L,6)
     var startIndex1 = stations1.indexOf(startStation);                  //finding a position of start stations
     var endIndex1 = stations1.indexOf(endStation);                      //finding a position of last stations
     var firstTrip = stations1.slice(startIndex1+1, endIndex1+1);        //slice - finding an index of start

       if(startIndex1 > endIndex1){
          var firstTrip = stations1.slice(endIndex1+1, startIndex1).reverse();
     }

  }else{

     var stations1 = mta[startLine];
     var stations2 = mta[endLine];

     var startIndex1 = stations1.indexOf(startStation);
     var endIndex1 = stations1.indexOf('Union Square');
     var firstTrip = stations1.slice(startIndex1+1, endIndex1+1);

        if (startIndex1 > endIndex1){
           var firstTrip = stations1.slice(endIndex1, startIndex1).reverse();
     }

     var startIndex2 = stations2.indexOf('Union Square')
     var endIndex2 = stations2.indexOf(endStation);
     var secondTrip = stations2.slice(startIndex2+1, endIndex2+1);

       } if (startIndex2 > endIndex2){
          var secondTrip = stations2.slice(endIndex2, startIndex2).reverse();
       }

     var multiTrip = function(){

       if (startIndex1 <= endIndex1){
          var firstTrip = stations1.slice(startIndex1+1, endIndex1+1);
       }else{
          (startIndex1 > endIndex1){
          var firstTrip = stations1.slice(endIndex1, startIndex1).reverse();
       }

     (startIndex1, endIndex1) + (startIndex2, endIndex2);
     }

     var changeStation = ('Union Square')

     console.log('You must travel through the following stops on ' + startLine + ' line: ' + firstTrip);
     console.log('Change at ' + changeStation);
     console.log('Your journey continues through the following stops: ' + secondTrip);
     console.log(multiTrip + ' stops in total');

};
// planTrip('N', 'Times Square', 'N', 'Union Square')
// planTrip('6', 'Grand Central', 'L', '1st')
// planTrip('L', '1st', '6', 'Grand Central')
planTrip('6', 'Grand Central', 'N', 'Times Square')



// // N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
// // L: ['8th', '6th', 'Union Square', '3rd', '1st'],
// // 6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],

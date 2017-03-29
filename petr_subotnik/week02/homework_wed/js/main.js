window.onload = function(){

var cat = document.getElementsByTagName('img')[0];

cat.style.left = "0px";


var moveCatRight = function() {
	var startPosition = parseInt(cat.style.left);
	var newPosition = startPosition + 20;
	cat.style.left = newPosition + 'px';
	if (parseInt(cat.style.left) >= (window.innerWidth - 260)){           /////parseInt!!!!!!!!!!
		clearInterval(moveForward);
		moveBack = window.setInterval(moveCatLeft, 100);
	}
};

var moveCatLeft = function() {
	var startPosition = parseInt(cat.style.left);
	var newPosition = startPosition - 20;
	cat.style.left = newPosition + 'px';
	if (parseInt(cat.style.left) <= -10){
		clearInterval(moveBack);
		moveForward = window.setInterval(moveCatRight, 100);
	}
};
var moveBack = window.setInterval(moveCatLeft, 100);

var moveForward = window.setInterval(moveCatRight, 100);
};

//   var cat = document.getElementsByTagName("img")[0]
//   cat.style.left = 0;
//
//   var moveCatRight = function(){
//     var startPosition = parseInt(cat.style.left)
//     var currentPosition = startPosition + 10;
//     cat.style.left = currentPosition + "px";
//
//     if (parseInt(cat.style.left) = window.innerWidth){
//        window.clearInterval(interval);
//        y = window.setInterval(moveCatRight, 50);
//     }
//   }
//   var moveCatLeft = function(){
//     var startPosition = parseInt(cat.style.left)
//     var currentPosition = startPosition - 10;
//     cat.style.left = currentPosition + "px";
//
//     if (parseInt(cat.style.left) <= - 2000){
//        window.clearInterval(interval);
//        x = window.setInterval(moveCatRight, 50);
//     }
//   }
//   var interval = window.setInterval(moveCatRight, 50);
// };
// var x = window.setInterval(moveCatRight, 50);

//    var currentPosition = (parseInt(cat.style.left);
//
//    var interval = window.setInterval(moveCat) {
//      if(currentPosition == window.innerWidth){
//        window.clearInterval(interval);
//      }else{
//        currentPosition++;
//      };
//   }50 ;
// };

  // var interval = window.setInterval(moveCat, 50);

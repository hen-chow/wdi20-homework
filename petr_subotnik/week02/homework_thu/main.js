$(document).ready(function(){
var amount = 10;  // or -10 ???
var moveCat = function(){
  var x = parseInt($('img').css('left'));
  x += amount;
  $('img').css('left', x + 'px');
}

var position = $('img').css('left', x + 'px');

setInterval(function(){ moveCat()}, 100);

});

var catRight = function(){
  if (position > window.innerWidth) {
    clearInterval(moveCat);
  }else{
    
  }

  }

}



















// $(document).ready(function(){
//
//   var cat = document.querySelector("img");
//
//   var width = $(document).width();
//
//     var catLeft = function() {
//       $("img").animate({left: width - 296 + "px"}, 5000, catRight);
//     }
//     var catRight = function() {
//       $("img").animate({right: 0 }, 5000, catLeft);
//   }
//
// catRight();
//
//
// });

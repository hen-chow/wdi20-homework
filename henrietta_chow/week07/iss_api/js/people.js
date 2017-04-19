var peopleApiURL = "http://api.open-notify.org/astros.json";

var random = function(max){
  return Math.floor(Math.random() * max)
};

var peopleInISS = function(){
  console.log('Getting number of people in space...');
  $.ajax({
    url: peopleApiURL,
    method: "GET",
    dataType: "JSON",
    success: displayPeopleInISS
  })
};

var displayPeopleInISS = function(data){
  var number = data.number;
  var people = data.people;
  // var craft = data.people[0].craft;
  // $(".content").append($("<p>").html(craft));
  people.forEach(function(el){
    var $name = $("<div class='name'>").html(el.name);

    // $name.css({
    //   top: random ($(".content").innerHeight) + 'px',
    //   left: random ($(".content").innerWidth) + 'px',
    //   display: "block",
    //   fontSize: (40 + random(80))  +'px',
    //   color: 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')',
    // });

    $(".content").append($name);
  })
}

$(document).ready(function(){
  $(".people button").on("click", function(){
    peopleInISS();
  })
});


// {
//   "message": "success",
//   "number": NUMBER_OF_PEOPLE_IN_SPACE,
//   "people": [
//     {"name": NAME, "craft": SPACECRAFT_NAME},
//     ...
//   ]
// }

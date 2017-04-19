var passTimesApiURL = "http://api.open-notify.org/iss-pass.json?lat=LAT&lon=LON";

var random = function(max){
  return Math.floor(Math.random() * max)
};

var passTimesISS = function(){
  console.log('Getting pass times info in space...');
  $.ajax({
    url: passTimesApiURL,
    method: "GET",
    dataType: "JSON",
    success: displayPassTimes
  })
};

var displayPassTimes = function(data){
  var data = data.request;
  var lat = data.latitude;
  var lon = data.longitude;
  var alt = data.altitude;
  var passes = data.passes;

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
  peopleInISS()
});


// {
//   "message": "success",
//   "number": NUMBER_OF_PEOPLE_IN_SPACE,
//   "people": [
//     {"name": NAME, "craft": SPACECRAFT_NAME},
//     ...
//   ]
// }

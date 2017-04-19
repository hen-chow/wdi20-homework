var locationApiURL = "http://api.open-notify.org/iss-now.json";

var locationOfISS = function(){
  console.log('Getting current location of ISS...');
  $.ajax({
    url: locationApiURL,
    method: "GET",
    dataType: "JSON",
    success: displayISSLocation
  })
};

var displayISSLocation = function(data){
  var data = data.iss_position;
  var $lat = $("<div>").text(data.latitude);
  var $lon = $("<div>").text(data.longitude);

  $(".content").append($lat); //bring this info to index.html to process on map
  })
}

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: -33.8697753, lng: 151.2059688}
    });

    var beaches = [
      <%@locations.each do |location|%>
        ['<%= location.name %>', <%= location.lat%>, <%= location.lng %>],
      <%end%>
    ];

    beaches.forEach(function(location){
      new google.maps.Marker({
        map: map,
        position: {lat: location[1], lng: location[2]},
      });
    })
  }


$(document).ready(function(){
  var locationTimer = window.setInterval(locationOfISS, 5000);
});

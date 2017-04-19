var flickrAPIURL = "https://api.flickr.com/services/rest/"
var flickrAPIKEY = "3ab66c44737420e50ceaee170f6eb074"

// create array of larger images for a slider
var generateImageSlideshow = function(data){
  return "https://farm" + data.farm + ".staticflickr.com/" + data.server + "/" + data.id + "_" + data.secret + "_q.jpg";
}

// process JSON data result for slider
var parseFlickrSlider = function(data){
  ajaxRequestInProgress = false;
  var sliderArray = data.photos.photo;
  sliderPage = data.photos.page + 1;
  sliderArray.forEach(function(el){
    var imgSrc = generateImageSlideshow(el);
    var $img = $("<img>").attr("src", imgSrc).attr("class", "slides");
    $("#slideshow").append($img);
  })
}
// actual ajax request for JSON object
var searchFlickrSlides = function(searchTerm, colourCode){
  ajaxRequestInProgress = true;
  $.ajax({
    url: flickrAPIURL,
    method: "GET",
    data: {
      api_key: flickrAPIKEY,
      text: searchTerm,
      method: "flickr.photos.search",
      nojsoncallback: 1,
      format: "json",
      page: page,
      color_codes: colourCode,
      per_page: 10 // limiting to only return of 10 images in JSON object
    },
    success: parseFlickrSlider
  });
}
// window scroll function to load next page results once user hits bottom of window
$(window).scroll(function(){
  var term = $("#searchFlickr").val();
  var colour = $("#colours").val();
  if($(window).scrollTop() + $(window).width() == $(document).width()){
    if(!ajaxRequestInProgress){
      console.log("right");
      searchFlickrSlides(term, colour);
    }
  }
});


var sliderPage = 1;
var ajaxRequestInProgress = 0;
// var pages = 1;
// button click event handler
$(document).ready(function(){
  $("#slideshow-submit").on("click", function(){
    var term = $("#searchFlickr").val();
    var colour = $("#colours").val();
    if(!ajaxRequestInProgress){
      searchFlickrSlides(term, colour);
    }
  });
})

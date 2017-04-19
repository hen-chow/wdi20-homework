var flickrAPIURL = "https://api.flickr.com/services/rest/"
var flickrAPIKEY = "3ab66c44737420e50ceaee170f6eb074"

// create array of image thumbnails
var generateImageThumbnail = function(data){
  return "https://farm" + data.farm + ".staticflickr.com/" + data.server + "/" + data.id + "_" + data.secret + "_q.jpg";
}
// process JSON data result to display images
var parseFlickrResults = function(data){
  ajaxRequestInProgress = false;
  var photosArray = data.photos.photo;
  page = data.photos.page + 1;
  console.log(data.photos);
  photosArray.forEach(function(el){
    var imgSrc = generateImageThumbnail(el);
    var $img = $("<img>").attr("src", imgSrc);
    $(".content").append($img);
  })
}

// actual ajax request for JSON object
var searchFlickr = function(searchTerm, colourCode){
  saveTermInHistory(searchTerm);
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
      color_codes: colourCode
    },
    success: parseFlickrResults
  });
}
// window scroll function to load next page results once user hits bottom of window
$(window).scroll(function(){
  var term = $("#searchFlickr").val();
  var colour = $("#colours").val();
  if(parseInt($(window).scrollTop() + $(window).height()) == $(document).height() ){
    if(!ajaxRequestInProgress){
      console.log("bottom");
      searchFlickr(term, colour);
    }
  }
});

var saveTermInHistory = function(term){
  $.ajax({
    url: "/histories",
    method: "POST",
    dataType: "JSON",
    data: {
      term: term
    }
  })
}

var page = 1;
var ajaxRequestInProgress = 0;
// var pages = 1;
// button click event handler
$(document).ready(function(){
  $("#submit").on("click", function(){
    $("#results").empty();
    var term = $("#searchFlickr").val();
    var colour = $("#colours").val();
    if(!ajaxRequestInProgress){
      searchFlickr(term, colour);
    }
  });

  $(document).on("click", "img", function(){
    var img_src = $(this).attr("src");
    $.ajax({
      url: "/favourites",
      method: "POST",
      dataType: "JSON",
      data: {
        image_src: img_src
      }
    })

  })

})

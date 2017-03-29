$(document).ready(function(){
  $("#search").on("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){

      if(xhr.readyState == 4){
        // we must have finished downloading the response :)
        var json_response = JSON.parse(xhr.responseText);

          json_response.Search.forEach(function(el){
            $("body").append($("<h2>").html(el.Title));
            var img = $("<img>").attr("src", el.Poster).attr("movie-id", el.imdbID);
            $("body").append(img);
          /*$("body").append($("<p>").html(json_response.Plot));*/
        });
      }
    };
    var searchResult = document.getElementById("movie_search").value;
    xhr.open("GET", "http://www.omdbapi.com/?s=" + searchResult);
    xhr.send();
  })


  $(document).on("click", "img", function(){
    var id = $(this).attr("movie-id");
    $("body").append($("<p>").html())

    console.log(id);
  });
});
/*
$(document).on("click", "img", function(){
  var id = $(this).attr("movie-id");
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){

    if(xhr.readyState == 4){
      var json_response = JSON.parse(xhr.responseText);

      $("body").append($("<p>").html(json_response.Plot));

    }
  };
  xhr.open("GET", "http://www.omdbapi.com/?i="+id);
  xhr.send();

});
*/

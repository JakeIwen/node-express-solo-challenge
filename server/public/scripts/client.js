$(document).ready(function() {
  console.log('js loaded');
  $("#jokeForm").on("submit", postJoke);
  getJokes();

  function getJokes() {
    $.ajax({
      type: 'GET',
      url: '/jokes',
      success: function(data) {
        console.log('got the joke data!');
        writeJokes(data);
      }
    });
  }

  function writeJokes(jokes) {
    $("#jokeList").empty();
    for (var i = jokes.length - 1; i >= 0; i--) {
      $("#jokeList").append('<div><p>' + jokes[i].jokeQuestion + '</p><p>' + jokes[i].punchLine + '</p><p> - ' + jokes[i].whoseJoke + '</p><br></div>');
    }

  }

  function postJoke() {
    event.preventDefault();
    var newJoke = {};
    $.each($('#jokeForm').serializeArray(), function(i, field) {
      newJoke[field.name] = field.value;
    });
    $.ajax({
      type: 'POST',
      url: '/jokes',
      data: newJoke,
      success: function(data) {
        getJokes();
      }
    });
  }

});

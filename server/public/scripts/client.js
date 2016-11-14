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

    for (var i = 0; i < jokes.length; i++) {
      $("#jokeList").append('<div><h3>' + jokes[i].whoseJoke + '</h3><p>' + jokes[i].jokeQuestion + '</p>' + jokes[i].punchLine + '</p></div>');
    }

  }

  function postJoke() {
    event.preventDefault();
    var newJoke = {};

    $.each($('#jokeForm').serializeArray(), function(i, field) {
      newJoke[field.name] = field.value;
    });

    console.log(newJoke);

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

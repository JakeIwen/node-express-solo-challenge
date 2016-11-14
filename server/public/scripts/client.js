$(document).ready(function() {
  console.log('js loaded');

  getJokes();

  function getJokes() {
    $.ajax({
      type: 'GET',
      url: '/jokes',
      success: function(data) {
        console.log('got the joke data!');
        appendJokes(data);
      }
    });
  }

  function appendJokes(jokes) {
    $("#jokeList").empty();

    for (var i = 0; i < jokes.length; i++) {
      $("#jokeList").append('<div><h2>' + jokes[i].whoseJoke + '</h2><p>' + jokes[i].jokeQuestion + '</p>' + jokes[i].punchLine + '</p></div>');
    }

  }


  $("#jokeList").on("submit", postJoke);

  function postJoke(joke) {
    event.preventDefault();
    var newJoke = {};

    $.each($('#jokeList').serializeArray(), function(i, field) {
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

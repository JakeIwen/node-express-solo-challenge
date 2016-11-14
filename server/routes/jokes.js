var express = require('express');
var router = express.Router();

// Cat data
var jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  }
];



router.get('/', function(req, res) {
  console.log('get jokes');
  res.send(jokes);
});

router.post('/', function(req, res) {
  console.log('adding a new joke');
  // console.log('req dot body', req.body);
  jokes.push(req.body);
  res.sendStatus(201);
});

module.exports = router;

// Variables

var quizContainer = document.getElementById('quiz')
var resultsContainer = document.getElementById('results')
var 
var timeEl = document.getElementById("time");
var question = [
{
  question: "",
  answer:"2020",
  answerlist: [1920, 1969, 2020,],
  correctAnswer: 3
  }
]

var question = [
  {
    question: "",
    answer:"",
    answerlist: ["yes", "no", "I should","asdf"],
    correctAnswer: 3
  }
]

var question = [
  {
    question: "What's your favorite food",
    answer:"",
    answerlist: [,,,],
    correctAnswer: 3
  }
]
  
var question = [
  {
    question: "",
    answer:"",
    answerlist: [,,,],
    correctAnswer: 3
  }
]
  
var question = [
  {
    question: "",
    answer:"",
    answerlist: [,,,],
    correctAnswer: 3
  }
]
  
var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till reading starts";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
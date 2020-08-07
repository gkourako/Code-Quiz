
// Variables
var startBtn = document.getElementById("start")
var answer1 = document.getElementById(answer1)
var answer2 = document.getElementById(answer2)
var answer3 = document.getElementById(answer3)
var answer4 = document.getElementById(answer4)
var question = []
var timeEl = document.getElementById("time");
var startScreen = document.querySelector(".start-screen")
var quiz = document.querySelector(".quiz")
// Question Variable
var questionArr = [
{
  question: "What car did Brian drive in Fast and Furious?",
  answer:"Blue R34",
  answerlist: ["Blue R34", "Yellow Supra", "Black Durango","Silver R34"],
  correctAnswer: 0
  },

  {
    question: "What is Dom and Letty's famous saying ",
    answer:"Ride or Die",
    answerlist: ["I live life a quarter mile at a time", 
    "Ride or Die", 
    "It doesn't matter whether you win by an inch or a mile, winning is winning",
    "You know this ain't no 10-second race.” “I've got nothing but time."],
    correctAnswer: 2
  },
  {
    question: "In Toyko Drift who says, Life's simple: You make choices and you don't look back.",
    answer:"Han",
    answerlist: ["Drift King", "Sean", "D.K.", "Han"],
    correctAnswer: 3
  },
  {
    question: "Which movie does Dom look at Letty and say, Ride or die, Remember?",
    answer:"Fast 6",
    answerlist: ["2 Fast 2 Furious", "Fast 6", "Fate of the Furious", " The Fast and Furious"],
    correctAnswer: 1
  },
  {
    question: "What is Paul Walkers most famous quote?",
    answer:"If one day the speed kills me don’t be sad because i will have died smiling.",
    answerlist: ["If one day the speed kills me don’t be sad because i will have died smiling.",
    "I don’t care what it is in life: listen to your heart. If you do, no matter what, you win.",
    "I’m not the kind of guy who’s taking advantage of my position.",
    "You know, all that really matters is that the people you love are happy and healthy. Everything else is just sprinkles on the sundae."],
    correctAnswer: 3
  }
]
function question1 () {

  var q1 = document.createElement(questionArr[0])
  console.log(q1)
  // console.log (questionArr[0])
  // console.log (questionArr[0])
  // console.log (questionArr[1])
  // console.log (questionArr[2])
  // console.log (questionArr[3])
  // console.log (questionArr[4])
  
}

question1()


//  Start Screen code
startBtn.addEventListener("click", setTime) 

    function setTime () {
      if (event.target.matches("button")) {
        startScreen.setAttribute("style", "display: none !important")
        quiz.setAttribute("style", "display: block !important")
// Hide quiz from start screen and display when button is clicked
      }
      var timeleft = 75
       var timeInt = setInterval(function (){
        timeEl.textContent = "Time: " + timeleft
        timeleft --;

        if (timeleft === 0) {
        timeEl.textContent = "";
        clearInterval(timeInt);
       }
      }, 1000);
    }

// var currentQ = 0;
// function buildQuiz() {
//   document.getElementById.
// }
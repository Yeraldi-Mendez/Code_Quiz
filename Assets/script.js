/* got help code to put questions into js from 
website: simplestepscose.com/javascript-quiz-tutorial 
*/
/* got quiz questions from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS*/

const myQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            1: "<js>",
            2: "<javascript>",
            3: "<script>",
            4: "<scripting>",
    },
    correctAnswer: "<script>"
    },

    {
        question: "How do you create a function in JavaScript?",
        answers: {
            1: "function = myFunction()",
            2: "function myFunction() ",
            3: "function:myFunction()",
            4: "function (myfunction)",
    },
    correctAnswer: "function myFunction()"
    },

    {
        question: "How does a FOR loop start?",
        answers: {
            1: " for (i = 0; i <= 5; i++) ",
            2: " for (i = 0; i <= 5) ",
            3: " for (i <= 5; i++) ",
            4: " for i = 1 to 5 ",
    },
    correctAnswer: " for (i = 0; i <= 5; i++) "
    },

    {
        question: "How do you write 'Hello world' in an alert box? ",
        answers: {
            1: "alert('Hello World'); ",
            2: " msg('Hello World'); ",
            3: " msgBox('Hello World'); ",
            4: " alertBox('Hello World'); ",
    },
    correctAnswer: "alert('Hello World'); "
    },

    {
        question: "What is the correct way to write a JavaScript array?",
        answers: {
            1: "var colors = ['red', 'green', 'blue']",
            2: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
            3: "var colors = (1:'red', 2:'green', 3:'blue')",
            4: "var colors = 'red', 'green', 'blue'",
    },
    correctAnswer: "var colors = ['red', 'green', 'blue']"
    },
];

//declaring variables
var startQuiz = document.getElementById("start-quiz");
var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var timer = document.getElementById("countdown");
var score = document.getElementById("score");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var highscore = document.getElementById("highscore");
var activeIndex = 1;
var timeLeft = 60;
var games = [];


//this is event listener to start quiz/timer
startQuiz.addEventListener("click", function () {
    countdown();
    renderQuestions(myQuestions[0]);
  });
  
//noticed timer goes by too quick
// needs to be resolved
questions.addEventListener("click", function (event) {
    if (activeIndex === 5) {
        answers.textContent = "Congrats! Game over";
        score.textContent = timeLeft;
    }

    else if(event.target.textContent !== myQuestions[activeIndex - 1].correctAnswer)
    {
        answers.textContent = "Opps, try again!";
        timeLeft -= 10;
    }

    else {
        answers.textContent = "You are correct!";
        console.log(timeLeft);
        activeIndex++;
        renderQuestions(myQuestions[activeIndex - 1]);
    }
});

//this will help display questions and start quiz

function renderQuestions(activeQuestion){
    questions.innerHTML = "";

    //adds question and answer el to html
    var qTitle = document.createElement("p");
    var answerList = document.createElement("ol");
    var answer1 = document.createElement ("li");
    var answer2 = document.createElement ("li");
    var answer3 = document.createElement ("li");
    var answer4 = document.createElement ("li");

    qTitle.textContent = activeQuestion.question;
    answer1.textContent = activeQuestion.answers[1];
    answer2.textContent = activeQuestion.answers[2];
    answer3.textContent = activeQuestion.answers[3];
    answer4.textContent = activeQuestion.answers[4];

    answerList.append(answer1);
    answerList.append(answer2);
    answerList.append(answer3);
    answerList.append(answer4);
    questions.append(qTitle);
    questions.append(answerList);
}

//timer from 60
function countdown(){
    var timeIntervals = setInterval(function(){
        if (timeLeft > 1 && activeIndex !== 5){
            timer.textContent = timeLeft;
            timeLeft--;
        }
        else{
            clearInterval(timeIntervals);
        }
    }, 1000);
}

//buttons
//submit but clicks but does not show name
submit.addEventListener("click", function(event){
    event.preventDefault();
    var games = {
        initials: initials.value.trim(),
        score: timeLeft //this needs to score of how many questions they got rihgt
    };
    games.push(game);
    storeGames();
    renderGames();
});

//I could not get highscore to show up
//need to resolve

function renderGames(){
    for(var i = 0; i < games.length; i++){
        console.log(games[i]);
        var hScore = document.createElement("li");
        hScore.textContent = games[i].initials + " " + games[i].score;
        highscore.append(hScore);
    }

    console.log(games.length);
}

//I believe that we learned this for this hw but I cannot remember (JSON)
function storeGames(){
    console.log(games);
    localStorage.setItem("games",JSON.stringify(games));
}

//funstion will load when page loads
function init(){
    var storeGames = JSON.parse (localStorage.getItem("games"));
    if(storeGames !== null){
        games = storeGames;
    }
}

init();
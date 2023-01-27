/* got help code from website: simplestepscose.com/javascript-quiz-tutorial 
on how to put questions in*/
/* got quiz questions from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS*/

var myQuestions = [
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
var start = document.getElementById("start-quiz");
var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var timer = document.getElementById("countdown");
var score = document.getElementById("score");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var highscore = document.getElementById("highscore");
var timeLeft = 60;
var games = [];

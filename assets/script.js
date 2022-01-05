// references for document elements
const highscore = document.getElementById("highscore");
const time = document.getElementById("time");
const intro = document.getElementById("intro");
const start = document.getElementById("start");
const title = document.getElementById("title");
const spaceQ = document.getElementById("spaceForQuestions");
const option1 = document.getElementById("opt1");
const option2 = document.getElementById("opt2");
const option3 = document.getElementById("opt3");
const correctAns = document.getElementById("correct");

const codingQuestions = [
    {
        question: "When do you use 'var' in JavaScript?",
        options: ["To insert content to your HTML elements", "To create a variable", "To add a comment"],
        answer: "To create a variable",
    },
    {
        question: "What method allows us to work with an element with a specific id in JavaScript?",
        options: [".getElementById()", ".empty()", ".append()"],
        answer: ".getElementById()",
    },
    {
        question: "How can we quickly process information with arrays?",
        options: ["assign a variable to reference it", "empty it", "loops"],
        answer: "loops",
    },
    {
        question: "Which is extremely important when writing with Javascript?",
        options: ["Make sure to link your JavaScript file to your html file", "Link your CSS file to your HTML file", ""],
        answer: "Make sure to link your JavaScript file to your html file",
    }
];

// The timer will start at 100 seconds
var initialTime = 100;
// Question index
var numQuestion = 0;

// Defaults the option buttons to not appear
option1.setAttribute("style", "display:none");
option2.setAttribute("style", "display:none");
option3.setAttribute("style", "display:none");


function getQuestion() {
    spaceQ.textContent = codingQuestions[numQuestion].question;
    option1.setAttribute("style", "display:visible");
    option1.textContent = codingQuestions[numQuestion].options[0];
    option1.addEventListener('click', checkAnswer);

    option2.setAttribute("style", "display:visible");
    option2.textContent = codingQuestions[numQuestion].options[1];
    option2.addEventListener('click', checkAnswer);

    option3.setAttribute("style", "display:visible");
    option3.textContent = codingQuestions[numQuestion].options[2];
    option3.addEventListener('click', checkAnswer);
    numQuestion++;

}

function checkAnswer(event) {
    var playerChoice = event.target;
    console.log(playerChoice);
    if(playerChoice.textContent == codingQuestions[numQuestion].answer) {
        correctAns.textContent = "Correct!";
    } else {
        correctAns.textContent = "Incorrect! Deducted 10 seconds.";
        initialTime -= 10;
    }
}

function endQuiz() { 
    spaceQ.setAttribute("style", "display:none");
    option1.setAttribute("style", "display:none");
    option2.setAttribute("style", "display:none");
    option3.setAttribute("style", "display:none");
    correctAns.setAttribute("style", "display:none");
    
    title.textContent = "The Code Quiz Ended!";
}

// The start button will cause the entire project to operate
start.addEventListener("click", function() {
    intro.setAttribute("style", "display:none");
    start.setAttribute("style", "display:none");
    var startTimer = setInterval(function() {
        if (initialTime >= 0) {
            time.innerHTML = "Time: " + initialTime;
        }
        console.log(initialTime);
        // decrements the time variable
        initialTime--;

        if (initialTime === 0) {
            endQuiz();
        }
    }, 1000)
    getQuestion(numQuestion);
});
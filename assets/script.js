// references for document elements
const highscore = document.getElementById("highscore");
const time = document.getElementById("time");
const intro = document.getElementById("intro");
const start = document.getElementById("start");
const title = document.getElementById("title");
const spaceQ = document.getElementById("spaceForQuestions");
const option1 = document.getElementById("opt1");
const option2 = document.getElementById("opt2");
const option3 = document.getElementById("opt3")

const codingQuestions = [
    {
        question: "When do you use 'var' in JavaScript?",
        options: ["To create a variable", "To insert content to your HTML elements", "S"],
        answer: "To create a variable",
    },
    {
        question: "What method allows us to work with an element with a specific id in JavaScript?",
        options: [".getElementById()", ".empty()", ".append()"],
        answer: ".getElementById()",
    },
    {
        question: "How can we quickly process information with arrays?",
        options: ["loops", "empty it", "assign a variable to reference it"],
        answer: "loops",
    },
    {
        question: "What is extremely important when writing with Javascript?",
        options: ["Make sure to link your JavaScript file to your html file", "", ""],
        answer: "Make sure to link your JavaScript file to your html file",
    }
];

// The timer will start at 60 seconds
var initialTime = 60;
// Question index
var numQuestion = 0;

// Defaults the option buttons to not appear
option1.setAttribute("style", "display:none");
option2.setAttribute("style", "display:none");
option3.setAttribute("style", "display:none");

// This function will display the remaining time in seconds
function countdownTimer() {
    // Function will only display non-negative numbers
    if (initialTime >= 0) {
        time.innerHTML = "Time: " + initialTime;
    }
    console.log(initialTime);
    // decrements the time variable
    initialTime--;
};

function getQuestion() {
    spaceQ.textContent = codingQuestions[numQuestion].question;
}

// Main function 
function startTimer() {
    // Sets an interval to make the timer update every 1 second
    setInterval(countdownTimer, 1000);
    intro.setAttribute("style", "display:none");
    start.setAttribute("style", "display:none");
    getQuestion();
};

// The start button will cause the entire project to operate
start.addEventListener("click", startTimer);
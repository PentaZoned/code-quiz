// Functions are organized where the first function starts at the bottom
// and goes up from there

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
const quizScore = document.getElementById("score");

// Array of questions, options, and the correct answer
const codingQuestions = [{
        question: "When do you use 'var' in JavaScript?",
        options: ["To insert content to your HTML elements", "To create a variable", "To add a comment"],
        answer: "To create a variable"
    },
    {
        question: "What method allows us to work with an element with a specific id in JavaScript?",
        options: [".getElementById()", ".empty()", ".append()"],
        answer: ".getElementById()"
    },
    {
        question: "How can we quickly process information with arrays?",
        options: ["assign a variable to reference it", "empty it", "loops"],
        answer: "loops"
    },
    {
        question: "Which is extremely important when writing with Javascript?",
        options: ["Link your JavaScript file to your html file", "Link your CSS file to your HTML file", "Add p tags to your HTML"],
        answer: "Link your JavaScript file to your html file"
    }
];

// The timer will start at 60 seconds
var initialTime = 60;
// Question index
var numQuestion = 0;

var startTimer;
// Defaults the option buttons to not appear
option1.setAttribute("style", "display:none");
option2.setAttribute("style", "display:none");
option3.setAttribute("style", "display:none");

// Function resets the start button and initial question and time values
function restartQuiz() {
    // Resets the start button to try the quiz again
    start.setAttribute("style", "display:visible");
    start.textContent = "Try Again?";
    
    // resets the question index and the starting tiem
    numQuestion = 0;
    initialTime = 60;
    // clicking the button will restart the quiz
    start.addEventListener("click", startQuiz);
}

// Function removes the quiz question and answers and shows a finish screen with score
function endQuiz() {
    // Removes the questions, answers, and correct/incorrect message elements from the browser
    spaceQ.setAttribute("style", "display:none");
    option1.setAttribute("style", "display:none");
    option2.setAttribute("style", "display:none");
    option3.setAttribute("style", "display:none");
    correctAns.setAttribute("style", "display:none");

    // Stops the timer when the quiz is complete
    clearInterval(startTimer);
    // Message displays when quiz ends
    title.textContent = "The Code Quiz Ended!";

    //Sets and shows the time left as the score
    quizScore.setAttribute("style", "display:visible");
    quizScore.textContent = "Your score: " + initialTime;
    // Function enables the user to try the quiz again
    restartQuiz();
}

// This function compares user selected answer with the answer element in the array
function checkAnswer(event) {
    var playerChoice = event.target;
    // Ensures the correct/incorrect message displays even after reset
    correctAns.setAttribute("style", "display:visible");

    // console log to check for errors
    console.log(playerChoice.textContent);
    console.log(codingQuestions[numQuestion].answer);
    console.log(numQuestion);

    // Compares the selected option to the answer in the array and displays message
    if (playerChoice.textContent === codingQuestions[numQuestion].answer) {
        correctAns.textContent = "Correct!";
    } else {
        correctAns.textContent = "Incorrect! Deducted 10 seconds.";
        // punishment for incorrect answer
        initialTime -= 10;
    }
    // Enables the next question to be displayed
    numQuestion++;

    // Stops the function from trying to retrieve non-existent elements of the array
    if (numQuestion === 4) {
        // Shows the end screen for the quiz
        endQuiz();
    } else {
        // prompts the browser to display the next question
        getQuestion();
    }
}


// Function will display the question element and options element from the codingQuestions array
// Also adds event listeners to compare user input with the correct answer
function getQuestion() {
    // Sets the current question being displayed
    spaceQ.textContent = codingQuestions[numQuestion].question;
    // Sets the option button to be visible
    option1.setAttribute("style", "display:visible");
    // Sets the contents of the option to be the stored value in the array
    option1.textContent = codingQuestions[numQuestion].options[0];
    option1.addEventListener('click', checkAnswer);

    option2.setAttribute("style", "display:visible");
    option2.textContent = codingQuestions[numQuestion].options[1];
    option2.addEventListener('click', checkAnswer);

    option3.setAttribute("style", "display:visible");
    option3.textContent = codingQuestions[numQuestion].options[2];
    option3.addEventListener('click', checkAnswer);
}

// Function resets elements, starts timer, displays time remaining or end screen
function startQuiz() {
    // Removes intro text, start button, and previous shown quiz score if shown
    intro.setAttribute("style", "display:none");
    start.setAttribute("style", "display:none");
    quizScore.setAttribute("style", "display:none");

    // Enables the HTML element to display the question
    spaceQ.setAttribute("style", "display:visible");

    // set the interval at which the time is decrementing, displays time remaining, or the end screen
    startTimer = setInterval(function () {

        // Displays the time remaining
        time.innerHTML = "Time: " + initialTime;
        // Console log for checking errors
        console.log(initialTime);
        // decrements the time variable
        initialTime--;

        // shows remaining time on the upper righthand corner
        if (initialTime >= 0) {
            time.innerHTML = "Time: " + initialTime;
        }
        // Ends the game if time reaches 0
        if (initialTime === 0) {
            endQuiz();
        }
    }, 1000) // Operates every 1 second
    // Shows the first question of the current quiz session
    getQuestion(numQuestion);
};

// The start button will cause the entire project to operate
start.addEventListener("click", startQuiz);
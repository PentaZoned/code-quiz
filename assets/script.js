// references for document elements
const highscore = document.getElementById("highscore");
const time = document.getElementById("time");
const intro = document.getElementById("intro");
const start = document.getElementById("start");

// The timer will start at 60 seconds
var initialTime = 60;

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

// Main function 
function startTimer() {
    // Sets an interval to make the timer update every 1 second
    setInterval(countdownTimer, 1000);
};

// The start button will cause the entire project to operate
start.addEventListener("click", startTimer);


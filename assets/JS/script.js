// set all variables
var challengeCard = document.querySelector("#challengeCard");
var timeInterval;
var timeLeft = allQuestions.length * 15;
// quiz timer
function timer() {
  timeInterval = setInterval(function () {
    timeLeft--;
    timerDisplay.textContent = "Timer: " + timeLeft;

    if (timeLeft === 0 || q >= allQuestions.length) {
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}
// display questions and answers

// Telling user if selection is correct

// Save scores local storage

// Retrieve scores from local storage

// When the game ends, display or hide page items

// Tracking top scores in local storage

// Add user initials to local storage

// Remove user initials from local storage

// Add event listeners

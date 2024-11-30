// Correct word
const correctAnswer = "IMRF";

// Check answer function
function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value.trim().toUpperCase();
    if (userAnswer === correctAnswer) {
        // Show reward section
        document.getElementById("reward-section").style.display = "block";
    } else {
        alert("Sorry, it's the wrong answer. Try again! I believe in you!");
    }
}

// Listen for "Enter" key press in the input field
document.getElementById("answer-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        // Prevent default behavior of Enter
        event.preventDefault();
        // Trigger the checkAnswer function
        checkAnswer();
    }
});

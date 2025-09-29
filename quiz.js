// Function to check the user's answer
function checkAnswer() {
  // Step 1: Define the correct answer
  const correctAnswer = "4";

  // Step 2: Get the user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  
  // If no option selected, give a warning
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer!";
    return;
  }

  const userAnswer = selectedOption.value;

  // Step 3: Compare with correct answer
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
}

// Step 4: Add event listener to button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

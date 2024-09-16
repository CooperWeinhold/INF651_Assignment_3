// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

let guess;
let attempts = 0;

// While loop to keep asking the user to guess until they guess correctly
while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    
    if (guess != randomNumber) {
        alert("Wrong! Try again.");
    }   else if (guess === randomNumber) {
        alert("Congratulations! You guessed the correct number!");
    } 
}

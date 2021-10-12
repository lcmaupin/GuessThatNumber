// GUESS THAT NUMBER

// Message to be used throughout file
const enterNumText = `Please enter a number greater than zero`;

// Used to restart the game
let restartGame = true;

// Stores range of numbers guessed
let rangeNum;

// Stores random number to be guessed
let randomNum;

// Stores number of attempts user has remaining
let attempts;

// Stores user's guessed number
let guess;

//  Stores user's response to play again prompt
let playAgain;

// Starting alert message
alert(`Welcome to the "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

// 
while (restartGame){
    // Prompts user to enter number setting upper bound for random number to be created and captures user entry in rangeNum variable
    rangeNum = prompt(`Please enter a maximum number for the range:`);

    // Converts rangeNum from string to number. If value cannot be parsed, returns NaN
    rangeNum = parseInt(rangeNum);

    // Verifies the entry for rangeNum is greater than zero. NaN has a boolean value of false. All non-zero numbers have a boolean value of true; zero has a value of false
    while (!rangeNum || rangeNum < 1){
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    // Creates random number to be guessed
    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    // Prompts user to enter the number of guesses to allow
    attempts = parseInt(prompt(`Please enter the number of attempts allowed:`));

    // Verifies that the value for attempts is greater than zero
    while (!attempts || attempts < 1){
        attempts = parseInt(prompt(enterNumText));
    }

    // Prompts user to enter a guess within the range that they specified. Stores their input as a string in guess
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) remaining:`)

    // Continues looping until user guess the correct number or exhausts their attempts
    while (true){
        // Converts guess string into number
        guess = parseInt(guess); 

        // Ensures user guess is valid within parameters set
        while (!guess || guess < 1 || gues > rangeNum){
            guess = parseInt(prompt(`Please enter a number between 1 and ${rangeNum}`));
        }

        // Removes an attempt
        attemps--;

        break;
    }

    break;
}
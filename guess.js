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
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

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
        // Cheat code to display randomNum to user
        if (guess === `Swordfish`){
            alert(`The answer is ${randomNum}`);

            // Allows the user to guess again
            guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) remaining:`);
        }


        // Converts guess string into number
        guess = parseInt(guess); 

        // Ensures user guess is valid within parameters set
        while (!guess || guess < 1 || guess > rangeNum){
            guess = parseInt(prompt(`Please enter a number between 1 and ${rangeNum}`));
        }

        // Removes an attempt
        attempts--;

        // Checks to see if the user guessed correctly. If so, the break ends the game
        if (guess === randomNum){
            alert(`YOU GUESSED ${randomNum}. CONGRATULATIONS!`);
            alert(`YOU'RE WINNER`);
            break;

            // Ends the game with a message if user is out of attempts
        } else if (attempts === 0){
            alert(`YOU'RE OUT OF GUESSES. THE NUMBER WAS ${randomNum}. OH WELL. SUCKS TO SUCK`);
            break;

            // Prompts for new guess when number entered is lower than the random number and the user has attempts remaining
        } else if (guess < randomNum){
            guess = prompt(`Your guess was too low. The number is more than ${guess}. You have ${attempts} attempt(s) remaining`);

            // Prompts for new guess when number entered is higher than the random number and the user has attempts remaining
        } else {
            guess = prompt(`Your guess was too high. The number is less than ${guess}. You have ${randomNum} attempt(s) remaining`);
        }
    }

    // Prompts the user to play again or end the session
    playAgain = prompt(`Play again? Type "Yes" or "No"`);

    // Loop continues until the user submits a valid response
    while (true){
        // Checks for a response of No
        if (playAgain.toUpperCase() === "NO" || playAgain.       toUpperCase() === "N"){

            // Thanks the user for playing and doesn't restart game
            alert(`Thanks for playing!`);
            restartGame = false;
            break;

            // Checks for a response of Yes
        } else if (playAgain.toUpperCase() === "YES" || playAgain.toUpperCase() === "Y"){
            break;

            // Prompt for all other responses. Restarts this loop
        } else {
            playAgain = prompt(`Please enter "Yes" or "No"`);
        }
    }
}
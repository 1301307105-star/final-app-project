// Word lists for different difficulties
let easyWords = ["cat", "dog", "sun", "car", "hat", "run", "big", "red"];
let mediumWords = ["house", "water", "happy", "green", "music", "phone"];
let hardWords = ["computer", "elephant", "beautiful", "challenge"];

// Game variables
let currentDifficulty = "";
let currentWord = "";
let scrambledWord = "";
let score = 0;
let timeLeft = 60;
let gameTimer;


// Get HTML elements
let easyBtn = document.getElementById("easy-btn");
let mediumBtn = document.getElementById("medium-btn");
let hardBtn = document.getElementById("hard-btn");
let gameSection = document.getElementById("game-section"); // You'll need to add this ID to your HTML
let scrambledDisplay = document.getElementById("scrambled-display");
let timeDisplay = document.getElementById("time-left");
let playAgainBtn = document.getElementById("play-again-btn");
let scoreDisplay = document.getElementById("current-score"); // Add this line here!

// Function to scramble a word
function scrambleWord(word) {
    let letters = word.split("");

}
//26-91 is everything for my buttons and how they work
// Add event listeners to difficulty buttons
easyBtn.addEventListener("click", startEasyGame);
mediumBtn.addEventListener("click", startMediumGame );
hardBtn.addEventListener("click", startHardGame );
playAgainBtn.addEventListener("click", resetGame);
    // More code will go here later


function startEasyGame() {
    currentDifficulty = "easy";
    gameSection.style.display = "block";
    document.querySelector(".difficulty-section").style.display = "none";
    
    startTimer();
    
    // Add event listeners for game buttons
    submitBtn.addEventListener("click", checkAnswer);
    skipBtn.addEventListener("click", skipWord);
    
    currentWord = getRandomWord();
    scrambledWord = scrambleWordProperly(currentWord);
    scrambledDisplay.innerText = scrambledWord;
    
    console.log("Answer is: " + currentWord);
}

function startMediumGame() {
    currentDifficulty = "medium";
    gameSection.style.display = "block";
    document.querySelector(".difficulty-section").style.display = "none";
    
    startTimer();
    
    // Add event listeners for game buttons
    submitBtn.addEventListener("click", checkAnswer);
    skipBtn.addEventListener("click", skipWord);
    
    currentWord = getRandomWord();
    scrambledWord = scrambleWordProperly(currentWord);
    scrambledDisplay.innerText = scrambledWord;

    console.log("Answer is: " + currentWord);
}

function startHardGame() {
    currentDifficulty = "hard";
    gameSection.style.display = "block";
    document.querySelector(".difficulty-section").style.display = "none";
    
    startTimer();
    
    // Add event listeners for game buttons
    submitBtn.addEventListener("click", checkAnswer);
    skipBtn.addEventListener("click", skipWord);
    
    currentWord = getRandomWord();
    scrambledWord = scrambleWordProperly(currentWord);
    scrambledDisplay.innerText = scrambledWord;
    
    console.log("Answer is: " + currentWord);
}




function getRandomWord() {
    let wordList;
    
    if (currentDifficulty === "easy") {
        wordList = easyWords;
    } else if (currentDifficulty === "medium") {
        wordList = mediumWords;
    } else {
        wordList = hardWords;
    }
    
    // Pick a random word from the list
    let randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}
//Buttons end Here!!

//Scramble word function starts here!!!!
function scrambleWord(word) {
    // Step 1: Split the word into letters
    let letters = word.split(""); // "cat" becomes ["c", "a", "t"]
    
    // Step 2: Mix up the letters (we'll do this next)
    
    // Step 3: Join the letters back into a word
    
    // Step 4: Return the scrambled word
}

function scrambleWord(word) {
    let letters = word.split("");
    
    // Mix up the letters by swapping them randomly
    for (let i = 0; i < letters.length; i++) {
        // Pick a random position
        let randomIndex = Math.floor(Math.random() * letters.length);
        
        // Swap the current letter with the random letter
        let temp = letters[i];
        letters[i] = letters[randomIndex];
        letters[randomIndex] = temp;
    }
    
    // Join the letters back together
    let scrambled = letters.join(""); // ["t", "c", "a"] becomes "tca"
    
    return scrambled;
}

function startEasyGame() {
    currentDifficulty = "easy";
    console.log("Easy game started!");
    
    // Show game section, hide difficulty buttons
    gameSection.style.display = "block";
    document.querySelector(".difficulty-section").style.display = "none";
    
    // Get a random word and scramble it
    currentWord = getRandomWord();
    scrambledWord = scrambleWord(currentWord);
    scrambledDisplay.innerText = scrambledWord;
    
    console.log("Answer is: " + currentWord); // This helps you test!
}

function startMediumGame() {
    currentDifficulty = "medium";
    console.log("Medium game started!");
    
    // Show game section, hide difficulty buttons
    gameSection.style.display = "block";
    document.querySelector(".difficulty-section").style.display = "none";
    
    // Get a random word and scramble it
    currentWord = getRandomWord();
    scrambledWord = scrambleWord(currentWord);
    scrambledDisplay.innerText = scrambledWord;
    
    console.log("Answer is: " + currentWord); // This helps you test!
}

function startHardGame() {
    currentDifficulty = "hard";
    console.log("Hard game started!");
    
    // Show game section, hide difficulty buttons
    gameSection.style.display = "block";
    document.querySelector(".difficulty-section").style.display = "none";
    
    // Get a random word and scramble it
    currentWord = getRandomWord();
    scrambledWord = scrambleWord(currentWord);
    scrambledDisplay.innerText = scrambledWord;
    
    console.log("Answer is: " + currentWord); // This helps you test!
}
//Scramble system ends HERE!!!

//Submit feature starts HERE!!!!
// Add this with your other element references
let submitBtn = document.getElementById("submit-btn");
let userAnswer = document.getElementById("user-answer");
let feedbackMessage = document.getElementById("feedback-message");

// Add event listener for submit button
submitBtn.addEventListener("click", checkAnswer);

function checkAnswer() {
    let playerGuess = userAnswer.value.toLowerCase();
    
    if (playerGuess === currentWord) {
        feedbackMessage.innerText = "Correct! Great job!";
        feedbackMessage.style.color = "green";
        // Add points and get new word
    } else {
        feedbackMessage.innerText = "Try again!";
        feedbackMessage.style.color = "red";
    }
}
//Submit fearture ends here

//Timer Function starts here

function startTimer() {
    timeLeft = 60;
    timeDisplay.innerText = timeLeft;
    
    gameTimer = setInterval(function() {
        timeLeft = timeLeft - 1;
        timeDisplay.innerText = timeLeft;
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000); // This runs every 1000 milliseconds (1 second)
}

function endGame() {
    clearInterval(gameTimer); // Stop the timer
    
    // Hide game section, show game over section
    gameSection.style.display = "none";
    document.querySelector(".game-over").style.display = "block";
    
    // Show final score
    document.getElementById("final-score").innerText = "Final Score: " + score;
}

function startEasyGame() {
    currentDifficulty = "easy";
    gameSection.style.display = "block";
    document.querySelector(".difficulty-section").style.display = "none";
    
    startTimer(); // Add this line!
    // Show the dropdown menu
    document.querySelector(".menu-section").style.display = "block";
    
    currentWord = getRandomWord();
    scrambledWord = scrambleWord(currentWord);
    scrambledDisplay.innerText = scrambledWord;
}

function startMediumGame() {
    currentDifficulty = "medium";
    gameSection.style.display = "block";
    document.querySelector(".difficulty-section").style.display = "none";
    
    startTimer(); // Add this line!
    
    currentWord = getRandomWord();
    scrambledWord = scrambleWord(currentWord);
    scrambledDisplay.innerText = scrambledWord;
}

function startHardGame() {
    currentDifficulty = "hard";
    gameSection.style.display = "block";
    document.querySelector(".difficulty-section").style.display = "none";
    
    startTimer(); // Add this line!
    
    currentWord = getRandomWord();
    scrambledWord = scrambleWord(currentWord);
    scrambledDisplay.innerText = scrambledWord;
}

//timer function ends here

//Skip word feature starts here
// Add this with your other element references
let skipBtn = document.getElementById("skip-btn");

// Add event listener for skip button
skipBtn.addEventListener("click", skipWord);

function skipWord() {
    feedbackMessage.innerText = "Skipped! The word was: " + currentWord;
    feedbackMessage.style.color = "orange";
    
    userAnswer.value = "";
    
    setTimeout(function() {
        feedbackMessage.innerText = "";
        currentWord = getRandomWord();
        scrambledWord = scrambleWordProperly(currentWord); // Use new function
        scrambledDisplay.innerText = scrambledWord;
        console.log("New word answer is: " + currentWord);
    }, 1500);
}

function getNewWord() {
    userAnswer.value = "";
    feedbackMessage.innerText = "";
    
    currentWord = getRandomWord();
    scrambledWord = scrambleWordProperly(currentWord); // Use new function
    scrambledDisplay.innerText = scrambledWord;
    
    console.log("New word answer is: " + currentWord);
}


function checkAnswer() {
    let playerGuess = userAnswer.value.toLowerCase();
    
    if (playerGuess === currentWord) {
        feedbackMessage.innerText = "Correct! The word was: " + currentWord;
        feedbackMessage.style.color = "green";
        
        // Add points based on difficulty
        if (currentDifficulty === "easy") {
            score = score + 1;
        } else if (currentDifficulty === "medium") {
            score = score + 2;
        } else {
            score = score + 3;
        }
        
        // Update score display
        document.getElementById("current-score").innerText = score;
        
        // Get a new word after a short delay
        setTimeout(getNewWord, 2000); // Wait 2 seconds so they can see the answer
        
    } else {
        feedbackMessage.innerText = "Try again! (The answer is not '" + playerGuess + "')";
        feedbackMessage.style.color = "red";
    }
}
//Skip Word button end here

//Try Again button start here!!


function resetGame() {
    // Reset all game variables
    score = 0;
    timeLeft = 60;
    currentWord = "";
    scrambledWord = "";
    currentDifficulty = "";
    
    // Clear the timer if it's running
    if (gameTimer) {
        clearInterval(gameTimer);
    }
    
    // Reset displays
    scoreDisplay.innerText = "0";
    timeDisplay.innerText = "60";
    feedbackMessage.innerText = "";
    userAnswer.value = "";
    scrambledDisplay.innerText = "Click a difficulty to start!";
    
    // Show difficulty section, hide game and game-over sections
    document.querySelector(".difficulty-section").style.display = "block";
    gameSection.style.display = "none";
    document.querySelector(".game-over").style.display = "none";
}

function endGame() {
    clearInterval(gameTimer); // Stop the timer
    
    // Hide game section, show game over section
    gameSection.style.display = "none";
    document.querySelector(".game-over").style.display = "block";
    
    // Show final score
    document.getElementById("final-score").innerText = "Final Score: " + score;
    
    // Show a message based on score
    let finalMessage = document.getElementById("final-message");
    if (score >= 10) {
        finalMessage.innerText = "Excellent! You're a word master!";
    } else if (score >= 5) {
        finalMessage.innerText = "Good job! Keep practicing!";
    } else {
        finalMessage.innerText = "Nice try! Play again to improve!";
    }
}
//Game menu

// Get the dropdown menu
let gameMenu = document.getElementById("game-menu");

// Add event listener for menu changes
gameMenu.addEventListener("change", handleMenuChange);

function handleMenuChange() {
    let selectedOption = gameMenu.value;
    
    if (selectedOption === "main") {
        goBackToMain();
    } else if (selectedOption === "restart") {
        restartCurrentGame();
    }
    
    // Reset the dropdown to default
    gameMenu.value = "";
}

function goBackToMain() {
    // Stop the timer if running
    if (gameTimer) {
        clearInterval(gameTimer);
    }
    
    // Reset everything and go back to difficulty selection
    resetGame();
}

function restartCurrentGame() {
    // Stop current timer
    if (gameTimer) {
        clearInterval(gameTimer);
    }
    
    // Restart the same difficulty
    if (currentDifficulty === "easy") {
        startEasyGame();
    } else if (currentDifficulty === "medium") {
        startMediumGame();
    } else if (currentDifficulty === "hard") {
        startHardGame();
    }
}





function scrambleWordProperly(word) {
    let scrambled = word;
    let attempts = 0;
    
    // Keep scrambling until it's different from the original
    while (scrambled === word && attempts < 10) {
        scrambled = scrambleWord(word);
        attempts = attempts + 1;
    }
    
    // If still the same after 10 tries, manually scramble it
    if (scrambled === word && word.length > 1) {
        let letters = word.split("");
        // Swap first and last letters
        let temp = letters[0];
        letters[0] = letters[letters.length - 1];
        letters[letters.length - 1] = temp;
        scrambled = letters.join("");
    }
    
    return scrambled;
}

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

// Function to scramble a word
function scrambleWord(word) {
    let letters = word.split("");

}

// Add event listeners to difficulty buttons
easyBtn.addEventListener("click", easyBtn);
mediumBtn.addEventListener("click", mediumBtn);
hardBtn.addEventListener("click", hardBtn);

function startEasyGame() {
    currentDifficulty = "easy";
    console.log("Easy game started!"); // This will show in the browser console
    // More code will go here later
}

function startMediumGame() {
    currentDifficulty = "medium";
    console.log("Medium game started!");
    // More code will go here later
}

function startHardGame() {
    currentDifficulty = "hard";
    console.log("Hard game started!");
    // More code will go here later
}


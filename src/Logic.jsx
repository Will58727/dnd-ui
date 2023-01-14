import Questions from "./Questions";


let wordToGuess;
let wordBlanks; //stores the word we're trying to guess as a STRING
let incorrectGuesses = []; //stores the current progress of our guessing as an ARRAY
let imageArray = document.getElementsByClassName("gallows-image");
let currentImageIndex = 1; 
let guess;

//function to choose random word
function storeChoice() {
        // generate a random value between 1 and 0 multiply
        const randomIndex = Math.floor(Math.random() * words.length);
        wordToGuess = words[randomIndex];
        
}

//function to get guess from input when button clicked and reset
function retrieveAnswers() {
    // finds html element with an id of guess-input (the input tag) and stores it as input box
    const inputBox = document.getElementById("guess-input");
    // retreive whatever is currently inside the input element and sets that equal to guess
    guess = inputBox.value.toLowerCase();
    // resets the guess input box
    inputBox.value = "";
}

//function for submitting a guess (attached to 'GUESS' button)
function submitGuess() {
    retrieveAnswers(); {
        if(checkGuessInWord()) {
            replaceBlanksWithGuess();
            updateBlanksHTML();
        } else {
            updateWrongGuesses();
            displayNextImage();
        }
        checkEndOfGame();
    }
}


//function to change the picture for a wrong guess
function displayNextQuestion() {
    imageArray[currentImageIndex].style.display = 'none';
    imageArray[currentImageIndex + 1].style.display = 'block';
    currentImageIndex++;
}

//function to check if game is over
function checkLastQuestion() {
    if (Questions.length > 3) {
        displayNextQuestion;
    } else if (Questions.length < 2) {
        DisplayCharacter();
    }
}

//function to display win
function win() {
    document.getElementById("h1").innerText = "YOU WIN!";
    document.getElementById("start").innerText = "New Game?";
    document.getElementById("body").style.backgroundColor = "green";
    document.getElementById("start").onclick = function() {window.location.reload()};
}

//function to display game over/lost
function lose() {
    document.getElementById("start").innerText = "New Game?";
    document.getElementById("h1").innerText = "YOU lose!";
    document.getElementById("body").style.backgroundColor = "red";
    document.getElementById("blanks-text").innerText = wordToGuess.toUpperCase;
    document.getElementById("start").onclick = function() {window.location.reload()};



}

//function to initialize variables and begin the game
function generateCharacter() {
        chooseRandomWord();
        console.log("wordToGuess", wordToGuess);
        generateBlanks();
        console.log("wordBlanks", wordBlanks);
        updateBlanksHTML();
}

//call playGame() so that game begins on page load
playGame();

// console.log(wordToGuess);
// console.log(wordBlanks);
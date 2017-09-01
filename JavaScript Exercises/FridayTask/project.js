
const formEle = document.getElementById('wrapperDivID')
const image = document.getElementById('picture')
const paraAbove = document.getElementById('abovePic')
const livesSection = document.getElementById('belowPic');
const winSec = document.getElementById('winSection');
const guessedWrongSection = document.getElementById('guessedWrong');
const diffPara = document.getElementById('diffPara');
const entryBox = document.getElementById('entryBoxID')
const sourcePics = "pics/";

let lives = 7;
let numRight = 0;
let numWrong = 0;
let guessesMade = 0;
let chosenWord = "";
let correctArray = [];
let guessArray = [];
let guessString = "";
let wrongGuesses = [];

let easyDifficulty = 1;
let normalDifficulty = 0;
let hardDifficulty = 0;

let wordBatch = ["please work", "alexandra", "international", "university", "john", "ben", "leon", "pocketboy", "eastenders", "elliott", "hangman",];

let Statistics = {
    name: "",
    played: 0,
    lost: 0,
    won: 0,
    winPercentage: this.played > 0 ? this.won / this.played * 100 : 0,
    leastGuesses: 0,
    mostGuesses: 0,
}

function setToEasy() {
    easyDifficulty = 1;
    normalDifficulty = 0;
    hardDifficulty = 0;
    startUp();
}
function setToNormal() {
    easyDifficulty = 0;
    normalDifficulty = 1;
    hardDifficulty = 0;
    startUp();
}
function setToHard() {
    easyDifficulty = 0;
    normalDifficulty = 0;
    hardDifficulty = 1;
    startUp();
}

function isLetter(a) {
    return a.toLowerCase() != a.toUpperCase();
}

function genWordArray(input) {
    return input.split('');
}

function randomNumberGenerator(upto) {
    return Math.floor(Math.random() * upto);
}

function chooseRandWord() {
    let tmp = "";
    if (easyDifficulty === 1) {
        do {
            tmp = wordBatch[randomNumberGenerator(wordBatch.length)]
            console.log(tmp)
        } while (tmp.length < 9)
    }
    if (normalDifficulty === 1) {
        do {
            tmp = wordBatch[randomNumberGenerator(wordBatch.length)]
        } while (tmp.length > 7 && tmp.length < 5)
    }
    if (hardDifficulty === 1) {
        do {
            tmp = wordBatch[randomNumberGenerator(wordBatch.length)]
        } while (tmp.length > 5)
    }
    return tmp;
}

function startUp() {
    chosenWord = chooseRandWord();
    correctArray = genWordArray(chosenWord);
    guessArray = genWordArray(blanksGen(chosenWord));
    InitialiseLivesSection();
    updateGuessSection();
    reset();
}

function reset() {
    lives = 7;
    numRight = 0;
    numWrong = 0;
    image.src = sourcePics + numWrong + ".jpg";
    wrongGuesses = [];
    winSec.innerHTML = "";
    guessedWrongSection.innerHTML = "Wrong Guesses:";
    entryBox.value = "";
}

function checkVictory() {
    temp = correctArray.length == guessArray.length
        && correctArray.every((v, i) => v === guessArray[i]);

    if (temp === true && lives > 0) {
        winSec.innerHTML = "You win!";
        Statistics.won++;
        Statistics.played++;
        writeGuessStats();

    }
    if (temp === false && lives <= 0) {
        winSec.innerHTML = "You lose!";
        Statistics.lost++;
        Statistics.played++;
        writeGuessStats();
    }
    if (temp === true && lives <= 0) {
        winSec.innerHTML = "Took you long enough!"
    }
}
function writeGuessStats() {
    writeLeastGuesses();
    writeMostGuesses();
}

function writeLeastGuesses() {
    let bestGame = localStorage.getItem('Stats').leastGuesses;
    let stat = localStorage.getItem('Stats');
    stat.leastGuesses = Math.min(bestGame, guessesMade);
    localStorage.setItem('Stats', stat);
}

function writeMostGuesses() {
    let worstGame = localStorage.getItem('Stats').mostGuesses;
    let stat = localStorage.getItem('Stats');
    stat.mostGuesses = Math.max(worstGame, guessesMade);
    localStorage.setItem('Stats', stat);
}


function blanksGen(input) {
    let blankString = "";
    correctArray.forEach((c) => {
        if (isLetter(c)) {
            blankString += "_";
        } else {
            blankString += " ";
        }
    })
    return blankString;
}

function joinArray(input) {
    return input.join('');
}

function guess(guessedLetter) {
    if (!isLetter(guessedLetter)) {
        window.alert("Input a letter!")
        return 0;
    }
    Statistics.guessesMade++;
    loseLife = true;
    for (let i = 0; i < correctArray.length; i++) {
        if (guessedLetter === correctArray[i]) {
            guessArray[i] = guessedLetter.valueOf();
            numRight++;
            loseLife = false;
        }
    }
    if (loseLife) {
        wrongGuesses.push(guessedLetter)
        lives--;
        numWrong++;
    }
    updateGuessedWrong();
    updateGuessSection();
    updateImage();
    checkVictory();
    entryBox.value = "";
}

function updateGuessSection() {
    updateGuessString();
    paraAbove.innerHTML = guessString;
}

function InitialiseLivesSection() {
    livesSection.innerHTML += lives;
}

function updateGuessString() {
    guessString = joinArray(guessArray)
    livesSection.innerHTML = "Lives Left: " + lives;
}

function updateGuessedWrong() {
    guessedWrongSection.innerHTML = "Wrong guesses:\n" + wrongGuesses;
}

function updateImage() {
    if (lives > -1) {
        image.src = sourcePics + numWrong + ".jpg";
    } else {
        image.src = sourcePics + 7 + ".jpg";
    }

}

printStats();
// rps.js

const rockVal = 'Rock';
const rockValS = 'R';
const paperVal = 'Paper';
const paperValS = 'P';
const scissorsVal = 'Scissors';
const scissorsValS = 'S';

const initHeader = 'Select an option below.';
const initTagline = ' ';

const tieHeaderRound = 'A tie!';
const tieTaglineRound = 'Everyone wins!';
const humanHeaderRound = 'You win!';
const computerHeaderRound = 'Computer wins...';
const rockPaperTagline = 'Paper covers rock.';
const paperScissorsTagline = 'Scissors cuts paper.';
const scissorsRockTagline = 'Rock crushes scissors.';

const humanHeaderEnd = 'Game complete. You win!';
const humanTaglineEnd = 'Let this be a lesson to everyone who ever doubted you. Select below to start a new round.';
const computerHeaderEnd = 'Game over. Computer wins...';
const computerTaglineEnd = 'Wow, this must be so embarrassing for you. Don\'t worry, I probably won\'t tell anyone. Select below to start a new round.';

let humanScore = 0;
let computerScore = 0;
let round = 1;

let maxScore = 5;

let gameComplete = false;

const buttons = document.querySelector('.buttons-container');
const resultHeader = document.querySelector('h2.result');
const resultTagline = document.querySelector('p.result');

const humanScoreDisplay = document.querySelector('#human-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const roundDisplay = document.querySelector('span.round');

function getComputerChoice () {
    let choiceNum = Math.random() * 3;
    let computerChoice = '';

    if (choiceNum < 1) {
        computerChoice = rockVal;
    } else if (choiceNum < 2) {
        computerChoice = paperVal;
    } else {
        computerChoice = scissorsVal;
    }

    return computerChoice;
}

function getHumanChoice (message = 'Make your choice. "Rock", "Paper", or "Scissors":') {
    let humanChoice = prompt(message);
    return humanChoice;
}

buttons.addEventListener('click', (e) => {
    switch(e.target.id) {
        case 'rock':
            playRound(rockVal, getComputerChoice());
            break;
        case 'paper':
            playRound(paperVal, getComputerChoice());
            break;
        case 'scissors':
            playRound(scissorsVal, getComputerChoice());
            break;
    }
});

function playRound (humanChoice, computerChoice) {
    if (gameComplete) {
        resetGame();
    }

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice.toLowerCase() === rockVal.toLowerCase() || humanChoice.toLowerCase() === rockValS.toLowerCase()) {
        if (computerChoice === rockVal) {
            console.log(`${tieHeaderRound} Human choice: ${humanChoice}. Computer choice: ${computerChoice}.`);
            resultHeader.textContent = tieHeaderRound;
            resultTagline.textContent = tieTaglineRound;
        } else if (computerChoice === paperVal) {
            console.log(`${computerHeaderRound} Human choice: ${humanChoice}. Computer choice: ${computerChoice}.`);
            resultHeader.textContent = computerHeaderRound;
            resultTagline.textContent = rockPaperTagline;
            computerScore++;
        } else if (computerChoice === scissorsVal) {
            console.log(`${humanHeaderRound} Human choice: ${humanChoice}. Computer choice: ${computerChoice}.`);
            resultHeader.textContent = humanHeaderRound;
            resultTagline.textContent = scissorsRockTagline;
            humanScore++;
        }
        round++;
    } else if (humanChoice.toLowerCase() === paperVal.toLowerCase() || humanChoice.toLowerCase() === paperValS.toLowerCase()) {
        if (computerChoice === paperVal) {
            console.log(`${tieHeaderRound} Human choice: ${humanChoice}. Computer choice: ${computerChoice}.`);
            resultHeader.textContent = tieHeaderRound;
            resultTagline.textContent = tieTaglineRound;
        } else if (computerChoice === scissorsVal) {
            console.log(`${computerHeaderRound} Human choice: ${humanChoice}. Computer choice: ${computerChoice}.`);
            resultHeader.textContent = computerHeaderRound;
            resultTagline.textContent = paperScissorsTagline;
            computerScore++;
        } else if (computerChoice === rockVal) {
            console.log(`${humanHeaderRound} Human choice: ${humanChoice}. Computer choice: ${computerChoice}.`);
            resultHeader.textContent = humanHeaderRound;
            resultTagline.textContent = rockPaperTagline;
            humanScore++;
        }
        round++;
    } else if (humanChoice.toLowerCase() === scissorsVal.toLowerCase() || humanChoice.toLowerCase() === scissorsValS.toLowerCase()) {
        if (computerChoice === scissorsVal) {
            console.log(`${tieHeaderRound} Human choice: ${humanChoice}. Computer choice: ${computerChoice}.`);
            resultHeader.textContent = tieHeaderRound;
            resultTagline.textContent = tieTaglineRound;
        } else if (computerChoice === rockVal) {
            console.log(`${computerHeaderRound} Human choice: ${humanChoice}. Computer choice: ${computerChoice}.`);
            resultHeader.textContent = computerHeaderRound;
            resultTagline.textContent = scissorsRockTagline;
            computerScore++;
        } else if (computerChoice === paperVal) {
            console.log(`${humanHeaderRound} Human choice: ${humanChoice}. Computer choice: ${computerChoice}.`);
            resultHeader.textContent = humanHeaderRound;
            resultTagline.textContent = paperScissorsTagline;
            humanScore++;
        }
        round ++;
    }

    displayScores();

    if (humanScore >= maxScore || computerScore >= maxScore) {
        displayEndMessage();
        gameComplete = true;
    }
}

function displayScores() {
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    roundDisplay.textContent = round;
}

function displayEndMessage() {
    console.log('Game Over');
    if (humanScore > computerScore) {
        resultHeader.textContent = humanHeaderEnd;
        resultTagline.textContent = humanTaglineEnd;
    } else if (computerScore > humanScore) {
        resultHeader.textContent = computerHeaderEnd;
        resultTagline.textContent = computerTaglineEnd;
    } else {
        resultHeader.textContent = 'A tie?';
        resultTagline.textContent = 'That wasn\'t supposed to happen.';
    }
}

function resetGame() {
    console.log('Game Reset');
    gameComplete = false;
    round = 1;
    humanScore = 0;
    computerScore = 0;
}
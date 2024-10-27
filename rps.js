// rps.js

const rockVal = 'Rock';
const rockValS = 'R';
const paperVal = 'Paper';
const paperValS = 'P';
const scissorsVal = 'Scissors';
const scissorsValS = 'S';

const initHeader = 'Select an option below.';
const initTagline = ' ';

const tieHeaderRound = 'Tie';
const tieTaglineRound = 'Everyone wins!';
const humanHeaderRound = 'You win!';
const computerHeaderRound = 'Computer wins...';
const rockPaperTagline = 'Paper covers rock.';
const paperScissorsTagline = 'Scissors cuts paper.';
const scissorsRockTagline = 'Rock crushes scissors.';

const humanHeaderEnd = 'You win!';
const humanTaglineEnd = 'Let this be a lesson to everyone who ever doubted you.';
const computerHeaderEnd = 'Computer wins.';
const computerTaglineEnd = 'Wow, this must be so embarrassing for you. Don\'t worry, I probably won\'t tell anyone.';

let humanScore = 0;
let computerScore = 0;
let round = 1;

let maxScore = 5;

let gameComplete = false;

const buttons = document.querySelector('.buttons-container');
const resultHeader = document.querySelector('h2.result');
const resultTagline = document.querySelector('p.result');

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
            console.log(tieMessage);
        } else if (computerChoice === paperVal) {
            console.log(`Computer wins. ${rockPaperMessage}`);
            computerScore++;
        } else if (computerChoice === scissorsVal) {
            console.log(`You win! ${scissorsRockMessage}`);
            humanScore++;
        }
        round++;
    } else if (humanChoice.toLowerCase() === paperVal.toLowerCase() || humanChoice.toLowerCase() === paperValS.toLowerCase()) {
        if (computerChoice === paperVal) {
            console.log(tieMessage);
        } else if (computerChoice === scissorsVal) {
            console.log(`Computer wins. ${paperScissorsMessage}`);
            computerScore++;
        } else if (computerChoice === rockVal) {
            console.log(`You win! ${rockPaperMessage}`);
            humanScore++;
        }
        round++;
    } else if (humanChoice.toLowerCase() === scissorsVal.toLowerCase() || humanChoice.toLowerCase() === scissorsValS.toLowerCase()) {
        if (computerChoice === scissorsVal) {
            console.log(tieMessage);
        } else if (computerChoice === rockVal) {
            console.log(`Computer wins. ${scissorsRockMessage}`);
            computerScore++;
        } else if (computerChoice === paperVal) {
            console.log(`You win! ${paperScissorsMessage}`);
            humanScore++;
        }
        round ++;
    } else if (humanChoice === '') {
        console.log('Fine, I\'ll choose for you.')
        playRound(getComputerChoice(), computerChoice);
    } else {
        console.log('I didn\'t understand that. Please try again.');
        playRound(getHumanChoice(), computerChoice);
    }

    if (humanScore >= maxScore || computerScore >= maxScore) {
        displayEndMessage();
        gameComplete = true;
    }
}

function displayEndMessage() {
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

}
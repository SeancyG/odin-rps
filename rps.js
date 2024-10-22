// rps.js

let humanScore = 0;
let computerScore = 0;

const rockVal = 'Rock';
const rockValS = 'R';
const paperVal = 'Paper';
const paperValS = 'P';
const scissorsVal = 'Scissors';
const scissorsValS = 'S';

const tieMessage = 'A tie. Everyone wins!'
const rockPaperMessage = 'Paper covers rock.';
const paperScissorsMessage = 'Scissors cuts paper.';
const scissorsRockMessage = 'Rock crushes scissors.'

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

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLower();
    if (humanChoice.toLower() === rockVal.toLower() || humanChoice.toLower() === rockValS.toLower()) {
        if (computerChoice === rockVal) {
            console.log(tieMessage);
        } else if (computerChoice === paperVal) {
            console.log(`Computer wins. ${rockPaperMessage}`);
        } else if (computerChoice === scissorsVal) {
            console.log(`You win! ${scissorsRockMessage}`);
        }
    } else if (humanChoice.toLower() === paperVal.toLower() || humanChoice.toLower() === paperValS.toLower()) {
        if (computerChoice === paperVal) {
            console.log(tieMessage);
        } else if (computerChoice === scissorsVal) {
            console.log(`Computer wins. ${paperScissorsMessage}`);
        } else if (computerChoice === rockVal) {
            console.log(`You win! ${rockPaperMessage}`);
        }
    } else if (humanChoice.toLower() === scissorsVal.toLower() || humanChoice.toLower() === scissorsValS.toLower()) {
        if (computerChoice === scissorsVal) {
            console.log(tieMessage);
        } else if (computerChoice === rockVal) {
            console.log(`Computer wins. ${scissorsRockMessage}`);
        } else if (computerChoice === paperVal) {
            console.log(`You win! ${paperScissorsMessage}`);
        }
    } else if (humanChoice === '') {
        console.log('Fine, I\'ll choose for you.')
        playRound(humanChoice, computerChoice);
    } else {
        console.log('I didn\'t understand that. Please try again.');
        playRound(getHumanChoice, computerChoice);
    }
}
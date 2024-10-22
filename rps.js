// rps.js

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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;

    function playRound (humanChoice, computerChoice) {
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
            round ++;
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
            round ++;
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
    }

    while (round < 6) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log('You win! Let this be a lesson to everyone who ever doubted you.');
        console.log(`You: ${humanScore}. Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log('Wow, this must be so embarrassing for you. Don\'t worry, I probably won\'t tell anyone.');
        console.log(`Computer: ${computerScore}. You: ${humanScore}.`);
    } else {
        console.log(tieMessage);
        console.log(`You: ${humanScore}. Computer: ${computerScore}`);
    }
}

let playerScore = 0;
let compScore = 0;
let tie = 0;


function getComputerChoice(){
    const randomNum = Math.random();
    let compChoice = "";

    if(randomNum < 0.3){
        compChoice += 'rock';
    }else if(randomNum < 0.6){
        compChoice += 'paper';
    }else{
        compChoice += 'scissor';
    }

    return compChoice;
};


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let result = ``;

    if(playerSelection === computerSelection){
        result += `
        Your Choice: ${playerSelection}
        Computer Choice: ${computerSelection}
        It's a Tie!`;

        console.log(result);
        tie++;

        return 'tie';

    }else if(
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')){

        result += `
        Your Choice: ${playerSelection}
        Computer Choice: ${computerSelection}
        You Win!`;

        console.log(result);
        playerScore++;

        return 'win';

        }else{
        result += `
        Your Choice: ${playerSelection}
        Computer Choice: ${computerSelection}
        You Lose!`;

        console.log(result);
        compScore++;

        return 'lose';

        }

};


function playGame(){
    
    const playerSelection = prompt('Enter selection(Rock,Paper,Scissor):').toLowerCase();
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

};

playGame();
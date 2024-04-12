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

        return 'win';

        }else{
        result += `
        Your Choice: ${playerSelection}
        Computer Choice: ${computerSelection}
        You Lose!`;

        console.log(result);

        return 'lose';

        }

};


function playGame(){
    
    const playerSelection = prompt('Enter selection(Rock,Paper,Scissor):').toLowerCase();
    const computerSelection = getComputerChoice();

    let playerScore = 0;
    let compScore = 0;
    let tie = 0;

    let result = playRound(playerSelection, computerSelection);

    if(result === 'tie'){
        tie++;
    }else if(result === 'win'){
        playerScore++;
    }else{
        compScore++;
    }

};

playGame();
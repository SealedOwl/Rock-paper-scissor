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
    }else if(
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')){

            result += `
        Your Choice: ${playerSelection}
        Computer Choice: ${computerSelection}
        You Win!`;
        }else{
            result += `
        Your Choice: ${playerSelection}
        Computer Choice: ${computerSelection}
        You Lose!`;
        }

    return result;
};


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

    let result = ``;

    if(playerSelection === computerSelection){
        result += `
        Your Choice: ${playerSelection}<br>
        Computer Choice: ${computerSelection}<br>
        It's a Tie!<br>`;

        
        tie++;

        return result;

    }else if(
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')){

        result += `
        Your Choice: ${playerSelection}<br>
        Computer Choice: ${computerSelection}<br>
        You Win!<br>`;

        
        playerScore++;

        return result;

        }else{
        result += `
        Your Choice: ${playerSelection}<br>
        Computer Choice: ${computerSelection}<br>
        You Lose!<br>`;

        
        compScore++;

        return result;

        }

};


function playGame(event){
    
    const computerSelection = getComputerChoice();
    const playerSelection = event.target.value.toLowerCase();

    const roundResult = playRound(playerSelection, computerSelection);
    result.innerHTML = roundResult;


};

// playGame();

//DOM

const Btn = document.querySelectorAll('.rpsBtn');
Btn.forEach(function(btn){
    btn.addEventListener('click', playGame);
});

const output = document.querySelector('.output');
const result = document.querySelector('.result');

output.appendChild(result);
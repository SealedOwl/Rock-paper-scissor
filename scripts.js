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


let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let randomNum = getRandomInt()
    if(randomNum === 0){
        return "rock"
    }
    else if(randomNum === 1){
        return "paper"
    }
    else if(randomNum === 2){
        return "scissors"
    }
    return;

}

function getHumanchoice(){
    let humanChoice = prompt("type your choice:").toLowerCase()
    if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
        alert("invalid choice, try again")
        return getHumanchoice()
    }
    return humanChoice;    
}


function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore +=1
        return "Human wins, rock beats scissors."
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore +=1
        return "Computer wins, paper beats rock."
    }
    else if(humanChoice === "rock" && computerChoice === "rock"){
        return "Its a tie! go again."
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore +=1
        return "Human wins, paper beats rock."
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore +=1
        return "Computer wins, scissors beats paper."
    }
    else if(humanChoice === "paper" && computerChoice === "paper"){
        return "Its a tie! go again."
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore +=1
        return "Human wins, scissors beats paper."
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore +=1
        return "Computer wins, rock beats scissors."
    }
    else if(humanChoice === "scissors" && computerChoice === "scissors"){
        return "Its a tie! go again."
    }

}
function playGame(){
    humanScore = 0
    computerScore = 0

    while (computerScore < 5 && humanScore < 5){
        const humanSelection = getHumanchoice()
        const computerSelection = getComputerChoice()
        
        const roundResult = playRound(humanSelection, computerSelection)
        console.log(roundResult + " Human:" + humanScore + " Computer:" + computerScore)
    }

}



playGame()
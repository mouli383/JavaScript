const choices=["rock","paper","scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");

function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];

    

    let result="";

    if(playerChoice === computerChoice){
        result=`IT'S A TIE`;
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice=="scissors")?"You Won":"You Lose";
                break;
            case "paper":
                result=(computerChoice === "rock")?`You Won`:`You Lost`;
                break;
            case "scissors":
                result=(computerChoice === "paper")?
                    `You Won`:`You Lost`;
                break;
        }
    
        playerDisplay.textContent=`Player: ${playerChoice}`;
    computerDisplay.textContent=`Computer: ${computerChoice}`;
    resultDisplay.textContent=`${result}`;

    let playerScore=0;
    let computerScore=0;

    const playerScores=document.getElementById("playerScore");
    const computerScores=document.getElementById("computerScore");

    switch(result){
        case 'You Won':
            playerScores.classList.add("greentext");
            playerScore++;
           playerScores.textContent=`Player Score: ${playerScore}`;
            break;
        case 'You Lost':
            computerScores.classList.add("redtext");
            computerScore++;
            computerScores.textContent=`Computer Score: ${computerScore}`;
            break;
    }
    }
}
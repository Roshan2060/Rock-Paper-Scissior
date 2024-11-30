//here we have the game scoreCard
let userScore=0;
let compScore=0;

//this section has the querySelection

const choices= document.querySelectorAll(".game-element");
let gameMessage = document.querySelector("#msg");
let userBoard = document.querySelector("#user-score");
let compBoard = document.querySelector("#comp-score");

// this function generates the choice of computer
const genCompChoice=()=>{
    const option =["rock","paper","scissor"];
    let index= Math.floor(Math.random()*3);
    return option[index];
}
// this function is for the game draw condtion

let gameDraw=()=>{
    gameMessage.innerHTML="Game is Draw! Try Again";
    gameMessage.style.backgroundColor="black";
    
}
// this function display the feedback after the game is played
const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        console.log("You Win!");
        gameMessage.innerHTML=`You Win! ${userChoice} beats ${compChoice}`;
        userBoard.innerHTML=userScore;
        gameMessage.style.backgroundColor="green";
    }
    else{
        compScore++;
        console.log("Computer win!");
        gameMessage.innerHTML=`Computer wins!Try again: ${compChoice} beats ${userChoice}`;
        compBoard.innerHTML=compScore;
        gameMessage.style.backgroundColor="red";

    }
}
// this function starts the game 
const playGame =(userChoice)=>{
    let compChoice = genCompChoice();
    console.log("user Choice =",userChoice);
    console.log("Comp Choice =",compChoice);

    if(userChoice ===compChoice){
         gameDraw();}
         else{
            let userWin = true;
            if(userChoice ==="rock"){
                userWin = compChoice ==="paper"?false:true;
            }else if(userChoice ==="paper"){
                userWin =compChoice ==="scissor"?false:true;
            }
            else{
                userWin = compChoice ==="rock"?false:true;
            }
            showWinner(userWin,userChoice,compChoice)
         }

}

// it is the user's choice generation
choices.forEach((choice)=>{
   
    choice.addEventListener("click",(e)=>{
        const userChoice = e.target.id;
       playGame(userChoice);
    })
})
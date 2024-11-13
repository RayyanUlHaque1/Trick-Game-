let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#User-score");
const compScorepara=document.querySelector("#Comp-score");
const genComputerChoice = () => {
    let options = ["Rock", "Paper", "Scissor"]
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];

};
const gameDraw = () => {
    console.log("Game was Draw.");
    msg.innerText="Game Was Draw !";
    msg.style.backgroundColor="#1c6e5c";
};
const showWinner=(userWin ,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#2F5425";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("You lose!");
        msg.innerText=`You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

};
const playGame = (userChoice) => {
    console.log("UserChoices =", userChoice);
    //Generate Computer choice
    const compChoice = genComputerChoice();
    console.log("compChoices =", compChoice);
    if (userChoice === compChoice) {
        //Draw case
        gameDraw();
    }else{
        let userWin=true;
        if(userChoice === "Rock"){
            userWin= compChoice ==="Paper"? false:true;
        }else if(userChoice === "Paper"){
            userWin= compChoice === "Scissor"? false:true;
        }else{
            userWin=compChoice === "Rock"? false:true;
        }
        showWinner(userWin , userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
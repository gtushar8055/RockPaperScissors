const choices = ["rock" , "paper" , "scissors"];
const pd = document.getElementById("playerDisplay");
const cd = document.getElementById("computerDisplay");
const rd = document.getElementById("resultDisplay");

function playgame(pc){
    const cc = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(pc === cc){
        result = "It's a tie";
    }
    else{
        switch(pc){
            case "rock":
                (cc === "scissors") ? "You Win!" : "You Lose !";
                break;
            case "paper":
                (cc === "rock") ? "You Win!" : "You Lose !";
                break;
            case "scissors":
                (cc === "paper") ? "You Win!" : "You Lose !";
                break;
            
        }
    }

    pd.textContent = `Player : ${pc}`;
    cd.textContent = `Computer : ${cc}`;
    resultDisplay.textContent = result;
}
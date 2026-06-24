//1 ROCK 2 SCISSORS 3 PAPER
let rockchoice = document.getElementById("rock");
let scissorschoice = document.getElementById("scissors");
let paperchoice = document.getElementById("paper");

let res = document.getElementById("result");
let score = document.getElementById("nbrScore");
score.textContent = 0;

function finalscore(){
    if(parseInt(score.textContent) ==10){

    }
}

function resetShadows(){
        rockchoice.style.boxShadow = "none";
        scissorschoice.style.boxShadow = "none";
        paperchoice.style.boxShadow = "none";

}
function Rock(){
    resetShadows();
    let chosen = Math.floor(Math.random() * 3 ) +1;
    if(chosen == 1){
        rockchoice.style.boxShadow = "0 0 10px 0 white";
        res.textContent = "MATCH NULL ✨";
    }else if(chosen == 2){
        scissorschoice.style.boxShadow = "0 0 10px 0 white";
        res.textContent = " U WIIIIN ✌️";
        score.textContent = parseInt(score.textContent) +1;

    } if(chosen == 3){
        paperchoice.style.boxShadow = "0 0 10px 0 white";
        res.textContent = " U LOOOOSER ☠️";
    }
    finalscore();

}

function Paper(){
    resetShadows();
    let chosen = Math.floor(Math.random() * 3 ) +1;
    if(chosen == 1){
        rockchoice.style.boxShadow = "0 0 10px 0 white";
        res.textContent = " U WIIIIN ✌️";
        score.textContent = parseInt(score.textContent) +1;
    }else if(chosen == 2){
        scissorschoice.style.boxShadow = "0 0 10px 0 white";
        res.textContent = "U LOOOOSER ☠️ ";
    } if(chosen == 3){
        paperchoice.style.boxShadow = "0 0 10px 0 white";
        res.textContent = "MATCH NULL ✨ ";
    }
    finalscore();
}

function Scissors(){
    resetShadows();
    let chosen = Math.floor(Math.random() * 3 ) +1;
    if(chosen == 1){
        rockchoice.style.boxShadow = "0 0 10px 0 white";
        res.textContent = "U LOOOOSER ☠️";
    }else if(chosen == 2){
        scissorschoice.style.boxShadow = "0 0 10px 0 white";
        res.textContent = "MATCH NULL ✨";

    } if(chosen == 3){
        paperchoice.style.boxShadow = "0 0 10px 0 white";
        res.textContent = "U WIIIIN ✌️";
        score.textContent = parseInt(score.textContent) +1;
    }
    finalscore();

}

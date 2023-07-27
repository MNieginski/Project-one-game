////////////////////////////////////////// Constants

const INTERVAL = 1000; //one seccond

////////////////////////////////////////// Define Varables
let passcode = [];
let passcodeStr

let guessCode = [];
let startArray = ["_", "_", "_", "_"]
let finalArray

let guessCounter = 0

let numGuesses;

let crntSpot = 0

let btnNum

let timerValue = 60; // timer starting value (60 seconds)
let timer

// Elements

const guessScrnEl = document.querySelector(".guess-screen")

const gameBtnEls = document.querySelectorAll(".num");
// let gameBtnEls = document.getElementsByClassName('.num');
const enterEl = document.querySelector("#enter");
const deleteEl = document.querySelector("#delete")



let pEl = document.querySelector("p").innerHTML = startArray

const timerDisplayEl = document.querySelector("#timerDisplay");
const startBtnEl = document.querySelector("#start");

// Initialization
function init(){
    passcodeGen()
}
init()

///////////////////////////////////////////////////////// Clicking

function passcodeEnter(){
    for(let i = 0; i < gameBtnEls.length; i++){
       gameBtnEls[i].onclick=function(){
           btnNum = gameBtnEls[i].innerHTML
        }
       } 
}

for (let i =0; i < gameBtnEls.length; i++){
gameBtnEls[i].addEventListener('click', (e) => {
   if (crntSpot >= 4){
        return
    } else {
    guessCode.push(e.target.innerText)

    startArray.splice(crntSpot, 1)
    startArray.splice(crntSpot, 0, e.target.innerText)

    document.querySelector("p").innerHTML = startArray
    crntSpot = crntSpot + 1
    guessCounter++
    }   
    })
}

enterEl.addEventListener('click', (e) => {
    compareCode()
})

deleteEl.addEventListener('click', (e) => {
    deleteDigit()
})

startBtnEl.addEventListener("click", handleBtnClick);

function handleBtnClick() {
    startBtnEl.setAttribute("disabled", "true");
    timer = setInterval(startGame, INTERVAL);
  }


///////////////////////////////////////////// Start/Restart game

function startGame(){
    //console.log("Game Started!")
    decrementCount()
    passcodeEnter()
}

function render() {
   timerDisplayEl.textContent = timerValue;
   // changes the number on the page, to match the new timerValue value as it updates
  }

function gameOver(){
    alert(`You ran out of time!`)
    location.reload()
}

function resetClock() {
    clearInterval(timer)
  }
///////////////////////////////////////////// Other functions

function passcodeGen() {
    passcode = Array.from({
        length: 4
    }, () => Math.floor(Math.random() * 10))
    console.log(passcode)
}

  function decrementCount() {
    if (timerValue > 0) {
      timerValue--;
      render(); 
    } else {
        gameOver() // calls for an end game
        resetClock() // without this, game never resets
    }
  }



function deleteDigit(){

}

function compareCode(){
    if(startArray.toString() === passcode.toString()){
        alert(`Congrats, you won!`)
        location.reload()        
    } else {
        startArray = ["_", "_", "_", "_"]
    }
}

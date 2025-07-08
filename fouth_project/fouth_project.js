let random = parseInt(Math.round(Math.random() * 100 + 1));
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi")
const result = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener("click", (event)=>{
        event.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
// valid the number is 1 to 100 or not
const validateGuess =  (guess)=>{
    if(isNaN(guess)){
        alert("Please Inter a valid number")
    } else if (guess < 1){
        alert("Please Inter a number grater then 1")
    }else if (guess > 100){
        alert("Please Inter a number less then 100")
    }else {
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game over. Random Number was ${random}`);
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
//
function checkGuess(guess){
    if(guess === random){
        displayMessage("You Guess Right")
        endGame()
    }else if(guess < random){
        displayMessage("number is too low")
    }else if(guess > random){
        displayMessage("number is too high")
    }
}
// clean the value and update the guess  the value and reamining guess update
function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    lastResult.innerHTML = `${10 - numGuess}`;
}
// display the message
function displayMessage(message){
    lowOrHi.innerHTML =`<h2>${message}</h2>`
}


function newGame(){
    const newgame = document.querySelector('#newGame')
    newgame.addEventListener("click", ()=>{
        random = parseInt(Math.round(Math.random() * 100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        lastResult.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        result.removeChild(p);
        lowOrHi.innerHTML = "";
        playGame = true;
    })
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled","");
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">start New game</h2>`;
    result.appendChild(p)
    playGame = false
    newGame()
}
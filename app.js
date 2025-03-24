let maxNumber = 10
let targetNumber = Math.round(Math.random() * maxNumber)
let guessCount = 0
let playCount = 1

let userInputElement = document.getElementById('user-input')
let outputElement = document.getElementById('output')
let cardNumberElement = document.getElementById('card-number')
let mysteryCardElement = document.getElementById('mystery-card')

// These are the functions for the game logic

function checkGuess(guess) {
    guessCount++


    if (guess == targetNumber) {
        console.log('Congratulations You got it!');
        outputElement.innerHTML += `<p>${guess} is right!</p>
        <p>You managed to figure it out in only <span class='number'>${guessCount}</span> guesses!</p>`
        userInputElement.innerHTML = ``
        cardNumberElement.innerText = `${targetNumber}`
        mysteryCardElement.classList.add('flipped')
        cardNumberElement.classList.add('front')
        drawResetButton()

    } else if (guess < targetNumber) {
        console.log('That number is too small');
        outputElement.innerHTML += `<p>${guess} is too small try again</p>`
    } else {
        console.log("That number is too big!");
        outputElement.innerHTML += `<p>Woah dude ${guess} is totally gigantic!</p>`
    }
}

function resetGame() {
    targetNumber = Math.ceil(Math.random() * maxNumber)
    outputElement.innerHTML = ``
    playCount += 1
    maxNumber = maxNumber * playCount
    guessCount = 0
    drawButtons()
}


// These are the functions to draw elements to the screen

function drawButtons() {
    userInputElement.innerHTML = ``

    for (let button = 1; button <= maxNumber; button += 1) {
        userInputElement.innerHTML += `<button onclick="checkGuess(${button})">${button}</button>`
        // console.log(`The loop has completed ${button} passes.`)
    }
}

function drawResetButton() {
    userInputElement.innerHTML = `<button onclick=resetGame()> Would you like to play again? </button>`
}

drawButtons()
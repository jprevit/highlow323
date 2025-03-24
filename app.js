let targetNumber = 5

function checkGuess(guess) {

    let outputElement = document.getElementById('output')

    if (guess == targetNumber) {
        console.log('Congratulations You got it!');
        outputElement.innerHTML += `<p>${guess} is right!</p>`
    } else if (guess < targetNumber) {
        console.log('That number is too small');
        outputElement.innerHTML += `<p>${guess} is too small try agai</p>`
    } else {
        console.log("That number is too big!");
        outputElement.innerHTML += `<p>Woah dude ${guess} is totally gigantic!</p>`
    }
}
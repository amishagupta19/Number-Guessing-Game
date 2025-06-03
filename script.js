const guessField = document.querySelector('#guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guessesSpan = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let remaining = 10;

function checkGuess(e) {
    e.preventDefault();
    const userGuess = Number(guessField.value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        lowOrHi.textContent = 'Please enter a number between 1 and 100!';
        return;
    }
    guesses.push(userGuess);
    guessesSpan.textContent = guesses.join(', ');
    remaining--;
    lastResult.textContent = remaining;

    if (userGuess === randomNumber) {
        lowOrHi.textContent = 'Congratulations! You got it right!';
        guessField.disabled = true;
        guessSubmit.disabled = true;
    } else if (remaining === 0) {
        lowOrHi.textContent = `Game Over! The number was ${randomNumber}.`;
        guessField.disabled = true;
        guessSubmit.disabled = true;
    } else if (userGuess < randomNumber) {
        lowOrHi.textContent = 'Too low!';
    } else {
        lowOrHi.textContent = 'Too high!';
    }
    guessField.value = '';
}

guessSubmit.addEventListener('click', checkGuess);

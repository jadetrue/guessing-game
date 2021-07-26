'use strict';

// Random number variable
let number = Math.trunc(Math.random() * 20) + 1;

// Score updating
let score = 20;

// Highscore
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Resetting the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#292f36';
});

// Value of user's input, checks
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage('No number entered, please enter a number and try again.');

    // When guess is right
  } else if (guess === number) {
    displayMessage('Correct Number! 🎉');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#4ecdc4';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number
          ? 'Number too high...please try again.'
          : 'Number too low...please try again.'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff6b6b';
    }
  }
});

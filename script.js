'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

let number = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret number is: ${number}`);
let score = 20;
let hightscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number';
    displayMessage('⛔ No number');
  } else if (number === guess) {
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number!');
    document.body.style.backgroundColor = '#008000';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
    if (score > hightscore) {
      hightscore = score;
      console.log(hightscore);
      document.querySelector('.highscore').textContent = hightscore;
    }
    console.log(`hightScore: ${hightscore}`);
    console.log(`score: ${score}`);
  } else if (guess !== number) {
    guess > number
      ? /*document.querySelector('.message').textContent = '📈too big number!'*/ displayMessage(
          '📈too big number!'
        )
      : /*document.querySelector('.message').textContent =
          '📉too small number!'*/ displayMessage('📉too small number!');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥You lost the game!';
      displayMessage('💥You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing . . .';
  displayMessage('Start guessing . . .');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.body.style.backgroundColor = '#222';
});

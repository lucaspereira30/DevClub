
const yourScore = document.querySelector('.your-score span');
const machineScore = document.querySelector('.machine-score span');
const resultMessage = document.querySelector('.result-message');

let playerScore = 0;
let alexaScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.id;
    const choices = ['rock', 'paper', 'scissors'];
    const alexaChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === alexaChoice) {
      resultMessage.textContent = 'Deu empate!';
      resultMessage.style.color = 'gray';
    } else if (
      (playerChoice === 'rock' && alexaChoice === 'scissors') ||
      (playerChoice === 'paper' && alexaChoice === 'rock') ||
      (playerChoice === 'scissors' && alexaChoice === 'paper')
    ) {
      playerScore++;
      yourScore.textContent = playerScore;
      resultMessage.textContent = 'Você ganhou!';
      resultMessage.style.color = 'green';
    } else {
      alexaScore++;
      machineScore.textContent = alexaScore;
      resultMessage.textContent = 'Você perdeu para a Alexa!';
      resultMessage.style.color = 'red';
    }
  });
});

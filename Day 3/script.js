function playGame(userChoice) {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  document.getElementById("resultText").innerHTML = `
    You chose: <span class="highlight">${userChoice}</span><br>
    Computer chose: <span class="highlight">${computerChoice}</span><br><br>
    <strong>${result}</strong>
  `;
}

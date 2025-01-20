function rollDice() {
    const dice = document.getElementById('dice');
    const randomNum = Math.floor(Math.random() * 6) + 1;
    dice.textContent = `🎲 ${randomNum}`;
}

document.querySelector('button').addEventListener('click', rollDice);

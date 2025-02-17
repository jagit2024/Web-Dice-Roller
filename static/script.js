function rollDice() {
    const diceElements = document.querySelectorAll(".dice");
    const rollButton = document.getElementById("rollButton");

    // Disable the button while rolling
    rollButton.disabled = true;
    rollButton.textContent = "Rolling...";

    let rollSound = new Audio("dice-roll.mp3"); // Ensure you have a sound file
    rollSound.play();

    let rollAnimation = setInterval(() => {
        diceElements.forEach(die => {
            die.textContent = Math.floor(Math.random() * 6) + 1; // Temporary random numbers
        });
    }, 100);

    setTimeout(() => {
        clearInterval(rollAnimation); // Stop animation

        diceElements.forEach((die, i) => {
            let finalRoll = Math.floor(Math.random() * 6) + 1;
            die.textContent = finalRoll;
        });

        rollButton.disabled = false;
        rollButton.textContent = "Roll Dice";

    }, 1500); // 1.5s animation before final numbers appear
}

document.getElementById("rollButton").addEventListener("click", rollDice);
window.onload = rollDice; // Roll dice on page load

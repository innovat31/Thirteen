// Dice Roller
function rollDice() {
    const diceFaces = ["🎲1", "🎲2", "🎲3", "🎲4", "🎲5", "🎲6"];
    const randomRoll = diceFaces[Math.floor(Math.random() * diceFaces.length)];
    document.getElementById("dice-result").textContent = randomRoll;
}

// Yes/No Spinner
function spinWheel() {
    const resultText = document.getElementById("spinner-result");
    const spinner = document.getElementById("spinner");

    // Randomly pick 0 (YES) or 1 (NO)
    const result = Math.random() < 0.5 ? "YES" : "NO";
    const angle = result === "YES" ? 0 : 180;

    spinner.style.transform = `rotate(${angle}deg)`;
    
    // Show result after spin animation
    setTimeout(() => {
        resultText.textContent = `Result: ${result}`;
    }, 2000);
}

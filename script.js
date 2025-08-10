// Load winners list from file
fetch('winners.json')
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById('winnersList');
        data.forEach(winner => {
            const li = document.createElement('li');
            li.textContent = winner;
            list.appendChild(li);
        });
    });

document.getElementById('playBtn').addEventListener('click', () => {
    // 0.01% win rate
    const win = Math.random() < 0.0001;
    const result = document.getElementById('result');

    if (win) {
        const name = prompt("You WON! Enter your name:");
        if (name) {
            fetch('winners.json')
                .then(res => res.json())
                .then(data => {
                    data.push(name);
                    saveWinners(data);
                    result.textContent = `🎉 Congrats ${name}, you beat the odds!`;
                });
        }
    } else {
        result.textContent = "❌ You lost. Try again!";
    }
});

// NOTE: This saveWinners will only work locally with a backend.
// GitHub Pages can't update files dynamically.
function saveWinners(winners) {
    console.log("Save winners to server", winners);
}
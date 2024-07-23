document.addEventListener('DOMContentLoaded', () => {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't programmers like nature? It has too many bugs.",
        "What do you call fake spaghetti? An impasta!",
        "Why do cows have hooves instead of feet? Because they lactose.",
        "How do you organize a space party? You planet.",
        "Why don't skeletons fight each other? They don't have the guts.",
        "What do you call cheese that isn't yours? Nacho cheese!",
        "Why did the math book look sad? Because it had too many problems.",
        "What do you call a bear with no teeth? A gummy bear!"
    ];

    const jokeDisplay = document.getElementById('jokeDisplay');
    const generateJokeButton = document.getElementById('generateJokeButton');
    const rollDisplay = document.getElementById('rollDisplay');

    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    function getJoke(index) {
        return jokes[index];
    }

    generateJokeButton.addEventListener('click', () => {
        const rolledNumber = getRandomNumber(jokes.length);
        rollDisplay.textContent = `Rolled: ${rolledNumber}`; 
        jokeDisplay.textContent = getJoke(rolledNumber);
    });
});

let noClickCount = 0;
let questions = [
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought.",
    "Are you absolutely sure?",
    "This could be a mistake, have a heart!",
    "Don't be so cold!",
    "Change of heart?"
];

document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerText = "Yay! Thank you!";
});

document.getElementById('noBtn').addEventListener('click', function() {
    if (noClickCount < questions.length) {
        document.getElementById('response').innerText = questions[noClickCount];
        let img = document.createElement('img');
        let btn = document.getElementById('yesBtn');
        let computedStyle = window.getComputedStyle(btn);
        let fontSize = parseFloat(computedStyle.fontSize);
        btn.style.fontSize = (fontSize + 5) + 'px';
        noClickCount++;
    } else {
        document.getElementById('response').innerText = "Okay, I'll stop asking. Maybe next time!";
        document.getElementById('noBtn').removeEventListener('click', handleNoButtonClick);
    }
});

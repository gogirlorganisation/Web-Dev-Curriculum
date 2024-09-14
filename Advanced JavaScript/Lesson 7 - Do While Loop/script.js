let scoops = 0;
let likedFlavor = null; // Track the liked flavor

const loopDisplay = document.getElementById('loop-display');
const scoopsContainer = document.getElementById('scoops-container');

// Define a color map for each flavor
const flavorColors = {
    coconut: '#ffffff',   // White
    coffee: '#6f4f28',    // Coffee brown
    pistachio: '#9bba8a', // Pistachio green
    strawberry: '#fc5c9c',// Strawberry pink
    vanilla: '#f3e5ab'    // Vanilla cream
};

document.getElementById('start-btn').addEventListener('click', startAdventure);

function startAdventure() {
    scoops = 0;
    likedFlavor = null; // Reset the liked flavor
    loopDisplay.innerHTML = '';
    scoopsContainer.innerHTML = '';
    askForFlavor();
}

function askForFlavor() {
    loopDisplay.innerHTML = `
        <select id="flavor-input" name="icecream">
            <option value="none">Pick a Flavour</option>
            <option value="coconut">Coconut</option>
            <option value="coffee">Coffee</option>
            <option value="pistachio">Pistachio</option>
            <option value="strawberry">Strawberry</option>
            <option value="vanilla">Vanilla</option>
        </select>
        <button onclick="tryFlavor()">Try it!</button>
    `;
}

function tryFlavor() {
    let flavor;
    do {
        flavor = document.getElementById('flavor-input').value;
        scoops++;
        updateScoopsDisplay(flavor);

        if (likedFlavor === null) { // If no liked flavor yet
            loopDisplay.innerHTML = `
                <h3>Step 2: You got a scoop of ${flavor}!</h3>
                <h3>Step 3: Do you like it?</h3>
                <button onclick="flavorResponse(true, '${flavor}')">Yum! I love it!</button>
                <button onclick="flavorResponse(false)">Not my favorite</button>
            `;
            return; // Exit the function to wait for user response
        }
        
    } while (likedFlavor !== null); // Continue if a liked flavor is found

    // If a liked flavor has been found
    loopDisplay.innerHTML = `
        <h3>Enjoy your ${likedFlavor} flavor!</h3>
        <button onclick="getAnotherScoop()">Get another scoop of ${likedFlavor}</button>
        <button onclick="endAdventure()">No thanks, I'm done!</button>
    `;
}

function flavorResponse(liked, flavor) {
    if (liked) {
        likedFlavor = flavor; // Set the liked flavor
        loopDisplay.innerHTML = `
            <h3>Awesome! You found a flavor you love!</h3>
            <h3>Do you want another scoop of ${likedFlavor}?</h3>
            <button onclick="getAnotherScoop()">Yes, please!</button>
            <button onclick="endAdventure()">No thanks, I'm done!</button>
        `;
    } else {
        loopDisplay.innerHTML = `
            <h3>That's okay! Let's try another flavor.</h3>
            <button onclick="askForFlavor()">Pick a new flavor</button>
        `;
    }
}

function getAnotherScoop() {
    if (likedFlavor) {
        scoops++;
        updateScoopsDisplay(likedFlavor);
        loopDisplay.innerHTML = `
            <h3>Enjoy your ${likedFlavor} flavor!</h3>
            <button onclick="getAnotherScoop()">Get another scoop of ${likedFlavor}</button>
            <button onclick="endAdventure()">No thanks, I'm done!</button>
        `;
    }
}

function endAdventure() {
    loopDisplay.innerHTML = `
        <h3>Your Ice Cream Adventure is complete!</h3>
        <p>You tried ${scoops} scoops of ice cream. Yum!</p>
        <button onclick="startAdventure()">Start a new adventure!</button>
    `;
}

function updateScoopsDisplay(flavor) {
    const scoop = document.createElement('div');
    scoop.className = 'ice-cream';
    scoop.style.backgroundColor = flavorColors[flavor] || '#ffffff'; // Use the defined color or default to white
    scoop.title = flavor;
    scoopsContainer.appendChild(scoop);
}

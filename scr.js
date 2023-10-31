// List of random words
const randomWords = ["apple", "banana", "cherry", "dog", "elephant", "frog", "giraffe", "horse", "iguana", "jacket"];
let usedWords = [];

// Function to generate a random word
function generateRandomWord() {
    // Check if the button has already been clicked
    if (localStorage.getItem("buttonClicked") === "true") {
        alert("You can only generate one word!");
        return;
    }

    if (randomWords.length === 0) {
        alert("No more words to generate.");
        return;
    }

    // Pick a random word from the remaining words
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    const word = randomWords[randomIndex];

    // Display the random word
    document.getElementById("randomWord").textContent = word;

    // Mark the button as clicked in localStorage
    localStorage.setItem("buttonClicked", "true");

    // Disable the button
    document.getElementById("generateButton").disabled = true;

    // Remove the word from the randomWords array and add it to usedWords
    randomWords.splice(randomIndex, 1);
    usedWords.push(word);

    // Save the updated lists in localStorage
    localStorage.setItem("randomWords", JSON.stringify(randomWords));
    localStorage.setItem("usedWords", JSON.stringify(usedWords));
}

// Function to reset localStorage
function resetLocalStorage() {
    localStorage.clear();

    // Reset the page to its initial state
    location.reload();
}

// Check if the button has already been clicked and words have been used
if (localStorage.getItem("buttonClicked") === "true" || JSON.parse(localStorage.getItem("usedWords")).length === 0) {
    document.getElementById("generateButton").disabled = true;
}

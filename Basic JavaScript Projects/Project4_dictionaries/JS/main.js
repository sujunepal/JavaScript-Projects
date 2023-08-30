// Define a dictionary (object) with key-value pairs
const dictionary = {
    apple: "A fruit that grows on trees.",
    banana: "A yellow fruit that monkeys love.",
    carrot: "An orange vegetable often used in salads.",
};

// Function to display a key-value pair in an HTML element
function displayDefinition(word) {
    const outputDiv = document.getElementById("dictionaryOutput");

    // Checking if the word exists in the dictionary
    if (dictionary.hasOwnProperty(word)) {
        // Delete the key from the dictionary
        delete dictionary[word];
        outputDiv.innerHTML = `<p><strong>${word}:</strong> ${dictionary[word]}</p>`;
    } else {
        outputDiv.innerHTML = "<p>Word not found in the dictionary.</p>";
    }
}

// Calling the function with a word to display its definition
displayDefinition("apple");


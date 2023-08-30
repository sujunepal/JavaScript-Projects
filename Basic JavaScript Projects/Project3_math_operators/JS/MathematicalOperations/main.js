// main.js

function calculate() {
    // Addition operation
    var additionResult = 5 + 7;

    // Subtraction operation
    var subtractionResult = 10 - 3;

    // Multiplication operation
    var multiplicationResult = 5 * 3;

    // Division operation
    var divisionResult = 10 / 2;

    // Modulus operation (remainder)
    var modulusResult = 11 % 4;

    // Exponentiation operation
    var exponentiationResult = Math.pow(2, 3);

    // Getting the paragraph element by its id
    var paragraph = document.getElementById("Math");

    // Updating the content of the paragraph with the results
    paragraph.textContent =
        "Addition Result: " + additionResult + "\n" +
        "Subtraction Result: " + subtractionResult + "\n" +
        "Multiplication Result: " + multiplicationResult + "\n" +
        "Division Result: " + divisionResult + "\n" +
        "Modulus Result: " + modulusResult + "\n" +
        "Exponentiation Result: " + exponentiationResult;

    // Displaying the results in the browser's console
    console.log("Addition Result:", additionResult);
    console.log("Subtraction Result:", subtractionResult);
    console.log("Multiplication Result:", multiplicationResult);
    console.log("Division Result:", divisionResult);
    console.log("Modulus Result:", modulusResult);
    console.log("Exponentiation Result:", exponentiationResult);
}

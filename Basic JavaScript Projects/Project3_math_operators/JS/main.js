function calculate() {
    // an addition operation and substraction operation
    var additionResult = 5 + 7;
    var subtractionResult = 5 - 5;
    // Multiplication operation
    var multiplicationResult = 5 * 3;
    // Division operation
    var divisionResult = 10 / 2;
    // Using the negation operator
    var originalValue = 10;
    var negatedValue = -originalValue;
    // Using the increment operator
    var initialValue = 5;
    var incrementedValue = initialValue++;

    // Using the decrement operator
    var otherValue = 10;
    var decrementedValue = --otherValue;

    var paragraph = document.getElementById('Math2');

    // Updating the content of the paragraph with the results
    paragraph.textContent ="Original Value: " + originalValue + "\n" +"Negated Value: " + negatedValue;
    paragraph.textContent = "Original Value: " + originalValue + "\n" + "Negated Value: " + negatedValue;
    // Update the content of the paragraph with the results
    paragraph.textContent =
        "Initial Value: " + initialValue + "\n" +
        "Incremented Value: " + incrementedValue + "\n" +
        "Other Value: " + otherValue + "\n" +
        "Decremented Value: " + decrementedValue;


    // Get the paragraph element by its id
    var paragraph = document.getElementById("Math");


    // Updating content of the paragraph with the result
    paragraph.textContent = "Addition Result: " + additionResult + "\n Subtraction Result: " + subtractionResult + "\n Multiplication Result:" + multiplicationResult + "\n DivisionResult:" + divisionResult + "Original Value: " + originalValue + "\n" + "Negated Value: " + negatedValue;
    // Displaying the results in the browser's console
    console.log("Addition Result:", additionResult);
    console.log("Subtraction Result:", subtractionResult);
    console.log("Multiplication Result:", multiplicationResult);
    console.log("Division Result:", divisionResult);
    console.log("Original Value:", originalValue);
    console.log("Negated Value:", negatedValue);
    console.log("Initial Value:", initialValue);
    console.log("Incremented Value:", incrementedValue);
    console.log("Other Value:", otherValue);
    console.log("Decremented Value:", decrementedValue);

}

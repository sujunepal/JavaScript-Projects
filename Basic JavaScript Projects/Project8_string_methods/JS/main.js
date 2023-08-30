// Get references to the <p> elements for displaying results
const concatResult = document.getElementById("concatResult");
const sliceResult = document.getElementById("sliceResult");
const toStringResult = document.getElementById("toStringResult");
const toPrecisionResult = document.getElementById("toPrecisionResult");

// Function to demonstrate the concat() method
function demonstrateConcat() {
    const string1 = "Hello, ";
    const string2 = "world!";
    const concatenatedString = string1.concat(string2);
    concatResult.textContent = concatenatedString;
}

// Function to demonstrate the slice() method
function demonstrateSlice() {
    const originalString = "This is a sample string.";
    const extractedSection = originalString.slice(5, 13);
    sliceResult.textContent = extractedSection;
}

// Function to demonstrate the toString() method
function demonstrateToString() {
    const number = 42;
    const stringNumber = number.toString();
    toStringResult.textContent = stringNumber;
}

// Function to demonstrate the toPrecision() method
function demonstrateToPrecision() {
    const number = 3.14159;
    const roundedNumber = number.toPrecision(4);
    toPrecisionResult.textContent = roundedNumber;
}

// functions when the page loads
demonstrateConcat();
demonstrateSlice();
demonstrateToString();
demonstrateToPrecision();





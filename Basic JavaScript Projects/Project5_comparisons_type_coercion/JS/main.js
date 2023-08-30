// Get the elements for displaying results
var trueElement = document.getElementById("trueResult");
var falseElement = document.getElementById("falseResult");
var positiveInfinityElement = document.getElementById("positiveInfinity");
var negativeInfinityElement = document.getElementById("negativeInfinity");

// Numbers for comparison
var number1 = 10;
var number2 = 5;

// Displaying positive infinity
positiveInfinityElement.innerText = "Positive Infinity: " + (1 / 0);

// Displaying negative infinity
negativeInfinityElement.innerText = "Negative Infinity: " + (-1 / 0);

// Performing comparisons using logical AND
trueElement.innerText = "Logical AND: " + ((number1 === 10) && (number2 === 5)) + " (both conditions are true)";
falseElement.innerText = "Logical AND: " + ((number1 === 10) && (number2 === 10)) + " (second condition is false)";

// Performing comparisons using logical OR
trueElement.innerHTML += "<br>Logical OR: " + ((number1 === 10) || (number2 === 5)) + " (at least one condition is true)";
falseElement.innerHTML += "<br>Logical OR: " + ((number1 === 20) || (number2 === 10)) + " (both conditions are false)";

// Get the data type of a variable using typeof and display it using document.write()
var sampleVariable = "Hello, GPT-3!";
document.write("Data type of sampleVariable: " + typeof sampleVariable + "<br>");

// Combining a string and a number
var stringVar = "The answer is ";
var numberVar = 42;
document.write(stringVar + numberVar + "<br>");

// Additional comparisons and operations
document.write("<br>Additional comparisons and operations:<br>");

// Equal to (==) comparison
document.write(number1 + " == " + number2 + ": " + (number1 == number2) + "<br>");

// Strict equal to (===) comparison
document.write(number1 + " === " + number2 + ": " + (number1 === number2) + "<br>");

// Greater than (>) comparison
document.write(number1 + " > " + number2 + ": " + (number1 > number2) + "<br>");

// Less than (<) comparison
document.write(number1 + " < " + number2 + ": " + (number1 < number2) + "<br>");

// Logical AND (&&) operation
document.write((number1 === 10) + " && " + (number2 === 5) + ": " + ((number1 === 10) && (number2 === 5)) + "<br>");

// Logical OR (||) operation
document.write((number1 === 10) + " || " + (number2 === 5) + ": " + ((number1 === 10) || (number2 === 5)) + "<br>");

// Logical NOT (!) operation
document.write("!" + (number1 === 10) + ": " + !(number1 === 10) + "<br>");






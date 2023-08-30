function outerFunction() {
    console.log("Outer function executed");

    function innerFunction() {
        console.log("Inner function executed");
    }

    innerFunction(); 
}

// Call the outer function
outerFunction();

// Updating the <p> element with the result
const paragraphElement = document.getElementById("output");
paragraphElement.textContent = "Check the console for messages!";



function updateParagraph() {
    var variable1 = "Hello, ";
    var variable2 = "world!";
    
    var combinedText = variable1 + variable2;
    
    var outputElement = document.getElementById("output");
    outputElement.textContent += combinedText;
}

}

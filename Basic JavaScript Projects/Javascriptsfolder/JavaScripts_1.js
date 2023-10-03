
var headings = document.getElementsByClassName("my-heading");
var paragraphs = document.getElementsByClassName("my-paragraph");

// Modifying the elements
for (var i = 0; i < headings.length; i++) {
    headings[i].style.color = "blue";
}

for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontWeight = "bold";
}

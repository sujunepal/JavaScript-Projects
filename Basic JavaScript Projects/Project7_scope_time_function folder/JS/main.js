function myFunction() {
    var currentHour = new Date().getHours();
    var paragraph = document.getElementById("myParagraph");

    if (currentHour < 12) {
        paragraph.innerHTML = "Good morning!";
    } else if (currentHour < 18) {
        paragraph.innerHTML = "Good afternoon!";
    } else {
        paragraph.innerHTML = "Good evening!";
    }
}



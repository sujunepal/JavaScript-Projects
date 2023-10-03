document.getElementById("contactForm").addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        event.preventDefault(); // Prevent form submission
    }

    if (email === "") {
        alert("Please enter your email.");
        event.preventDefault(); // Prevent form submission
    }

    if (message === "") {
        alert("Please enter your message.");
        event.preventDefault(); // Prevent form submission
    }
});

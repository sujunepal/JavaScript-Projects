// Countdown function that takes a target date and updates the countdown every second
function countdown(targetDate) {
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        if (timeDifference <= 0) {
            countdownElement.textContent = "Countdown expired!";
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    // Initial update
    updateCountdown();
    // Updating countdown every second
    setInterval(updateCountdown, 1000);
}

// Setting target date for the countdown (e.g., 1 hour from now)
const targetDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now
countdown(targetDate);


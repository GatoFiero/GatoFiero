// Countdown Timer
function countdownTimer(eventDate, elementId) {
    const eventDateTime = new Date(eventDate).getTime();
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDateTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(elementId).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById(elementId).innerHTML = "Event Started";
        }
    }, 1000);
}

countdownTimer("Aug 16, 2024 00:00:00", "countdown1");
countdownTimer("Sep 20, 2024 00:00:00", "countdown2");
countdownTimer("Nov 8, 2024 00:00:00", "countdown3");

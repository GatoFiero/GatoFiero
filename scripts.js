// Countdown Timer
document.querySelectorAll('.countdown-timer').forEach(timer => {
    const eventDate = new Date(timer.dataset.date);
    const updateCountdown = () => {
        const now = new Date();
        const diff = eventDate - now;

        if (diff <=

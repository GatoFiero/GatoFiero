// Countdown Timer
document.querySelectorAll('.countdown-timer').forEach(timer => {
    const eventDate = new Date(timer.dataset.date);
    const updateCountdown = () => {
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            timer.textContent = 'Event Started!';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('js-nav-toggle');
const navMenu = document.getElementById('js-nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

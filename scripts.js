document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('js-nav-toggle');
    const navMenu = document.getElementById('js-nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    const countdownElements = document.querySelectorAll('.countdown-timer');

    countdownElements.forEach(timer => {
        const targetDate = new Date(timer.getAttribute('data-date')).getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                timer.innerHTML = 'Event has passed';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        };

        updateCountdown();
        setInterval(updateCountdown, 1000);
    });
});

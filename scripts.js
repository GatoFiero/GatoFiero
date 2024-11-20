// Smooth Scroll for Navigation Links
document.querySelectorAll('.navigation-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for fixed nav height
                behavior: 'smooth'
            });
        }
    });
});

// Countdown Timers for Events
function calculateCountdowns() {
    const events = [
        { id: 'countdown1', date: new Date('2024-08-16') },
        { id: 'countdown2', date: new Date('2024-09-20') },
        { id: 'countdown3', date: new Date('2024-11-08') },
    ];

    events.forEach(event => {
        const timerElement = document.getElementById(event.id);
        const now = new Date();
        const timeDiff = event.date - now;

        if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
            const seconds = Math.floor((timeDiff / 1000) % 60);

            timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            timerElement.textContent = 'Event has passed!';
        }
    });
}

// Run countdown function every second
setInterval(calculateCountdowns, 1000);

// Highlight Navigation Menu Based on Scroll Position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navigation-menu a');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust for fixed nav height
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Add Active Class to Hovered Gallery Image
const galleryImages = document.querySelectorAll('.image-gallery img');
galleryImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        galleryImages.forEach(img => img.classList.remove('active'));
        image.classList.add('active');
    });

    image.addEventListener('mouseleave', () => {
        image.classList.remove('active');
    });
});

// Optional: Add Dynamic Blog Posts (Demo Example)
const blogSection = document.querySelector('#blog');
const posts = [
    { title: 'Behind the Scenes of "Maldoror"', link: 'post1.html' },
    { title: 'Upcoming Projects: Hypnosis Themes', link: 'post2.html' },
];

posts.forEach(post => {
    const article = document.createElement('article');
    article.innerHTML = `
        <h3>${post.title}</h3>
        <a href="${post.link}" target="_blank">Read More</a>
    `;
    blogSection.appendChild(article);
});

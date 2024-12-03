document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navigationMenu = document.getElementById('primary-menu');

    if (menuToggle && navigationMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navigationMenu.classList.toggle('active');
        });
    }

    // Press Image Expansion Functionality
    const pressArticle = document.getElementById('press-article');

    if (pressArticle) {
        const expandedImgContainer = document.createElement('div');
        expandedImgContainer.id = 'expanded-img';
        expandedImgContainer.innerHTML = `<img src="${pressArticle.src}" alt="${pressArticle.alt}">`;
        document.body.appendChild(expandedImgContainer);

        pressArticle.addEventListener('click', () => {
            expandedImgContainer.style.display = 'flex';
        });

        expandedImgContainer.addEventListener('click', () => {
            expandedImgContainer.style.display = 'none';
        });
    }
});

// Language Selector Script
function changeLanguage() {
    const lang = document.getElementById('languageSelector').value;
    window.location.href = lang; // Redirect to the selected language folder
}

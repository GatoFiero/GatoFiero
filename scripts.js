document.addEventListener('DOMContentLoaded', function() {
    // Navigation Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navigationMenu = document.getElementById('primary-menu');

    if (menuToggle && navigationMenu) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navigationMenu.classList.toggle('active'); // Use 'active' consistently
        });
    }

    // Press Image Expansion Functionality
    const pressArticle = document.getElementById('press-article');

    if (pressArticle) {
        const expandedImgContainer = document.createElement('div');
        expandedImgContainer.id = 'expanded-img';
        expandedImgContainer.innerHTML = `<img src="${pressArticle.src}" alt="${pressArticle.alt}">`;
        document.body.appendChild(expandedImgContainer);

        pressArticle.addEventListener('click', function() {
            expandedImgContainer.style.display = 'flex';
        });

        expandedImgContainer.addEventListener('click', function() {
            expandedImgContainer.style.display = 'none';
        });
    }

    // Language Change Script
    function changeLanguage() {
        const lang = document.getElementById('languageSelector').value;
        window.location.href = lang;
    }

    // Expose the function to the global scope
    window.changeLanguage = changeLanguage;
});

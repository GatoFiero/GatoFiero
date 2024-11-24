// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigationMenu = document.querySelector('.navigation-menu');

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navigationMenu.classList.toggle('active');
    });

    // Press Image Expansion
    const pressArticle = document.getElementById('press-article');
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
});

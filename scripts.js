document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const primaryMenu = document.querySelector("#primary-menu");

    menuToggle.addEventListener("click", function () {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        primaryMenu.classList.toggle("open"); // Ensure you have CSS for .open
    });
});

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

  // Language change script
function changeLanguage() {
    const lang = document.getElementById('languageSelector').value;

    // Get the current path (e.g., "/en/index.html")
    const currentPath = window.location.pathname;

    // Extract the filename from the path (e.g., "index.html")
    const filename = currentPath.split('/').pop();

    // Construct the new path based on the selected language
    const newPath = lang + filename;

    // Redirect to the new path
    window.location.href = newPath;
}

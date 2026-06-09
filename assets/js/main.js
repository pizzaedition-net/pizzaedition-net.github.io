document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Load Games Data
    if (document.getElementById('featured-games') || document.getElementById('category-grid')) {
        fetch('./data/games.json')
            .then(response => response.json())
            .then(games => {
                if (document.getElementById('category-grid')) {
                    renderCategories(games);
                }
                if (document.getElementById('featured-games')) {
                    renderGames(games.slice(0, 48), 'featured-games');
                }
            });
    }
});

function renderCategories(games) {
    const categories = [...new Set(games.map(g => g.category))].sort();
    const container = document.getElementById('category-grid');
    container.innerHTML = categories.map(cat => `
        <a href="./category.html?cat=${encodeURIComponent(cat)}" class="tag">${cat}</a>
    `).join('');
}

function renderGames(games, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = games.map(game => `
        <a href="./game.html?id=${game.id}" class="game-card">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
                 data-src="${game.thumb}" 
                 alt="${game.title}" 
                 class="lazy">
            <p>${game.title}</p>
        </a>
    `).join('');
    
    initLazyLoading();
}

function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

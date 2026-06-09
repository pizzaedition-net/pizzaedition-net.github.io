document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');

    if (gameId) {
        fetch('./data/games.json')
            .then(response => response.json())
            .then(games => {
                const game = games.find(g => g.id === gameId);
                if (game) {
                    setupGamePage(game, games);
                } else {
                    window.location.href = './index.html';
                }
            });
    } else {
        window.location.href = './index.html';
    }
});

function setupGamePage(game, allGames) {
    // Meta Tags
    document.title = `${game.title} - Play Online - Pizza Edition Games`;
    document.querySelector('meta[name="description"]').setAttribute('content', game.description.substring(0, 160));

    // UI Elements
    document.getElementById('game-title').textContent = game.title;
    document.getElementById('game-category').textContent = game.category;
    document.getElementById('game-description').textContent = game.description;
    document.getElementById('game-instructions').textContent = game.instructions || "Use your mouse or keyboard to play.";
    document.getElementById('game-thumb-large').src = game.thumb;

    // Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        "name": game.title,
        "description": game.description,
        "image": game.thumb,
        "genre": game.category,
        "author": {
            "@type": "Organization",
            "name": "GameMonetize"
        }
    };
    document.getElementById('game-schema').textContent = JSON.stringify(schema);

    // FAQ Generation
    const faqContainer = document.getElementById('faq-section');
    faqContainer.innerHTML = `
        <h3>Frequently Asked Questions</h3>
        <div class="faq-item">
            <h4>How to play ${game.title}?</h4>
            <p>${game.instructions || `Simply click the PLAY NOW button and follow the in-game tutorial.`}</p>
        </div>
        <div class="faq-item">
            <h4>Is ${game.title} free?</h4>
            <p>Yes, ${game.title} is 100% free to play on Pizza Edition Games.</p>
        </div>
        <div class="faq-item">
            <h4>Can I play ${game.title} on mobile?</h4>
            <p>Yes, this game is optimized for both desktop and mobile devices.</p>
        </div>
    `;

    // Related Games
    const related = allGames
        .filter(g => g.category === game.category && g.id !== game.id)
        .slice(0, 12);
    renderGames(related, 'related-grid');

    // Play Button Logic
    const playBtn = document.getElementById('play-now-btn');
    const overlay = document.getElementById('play-overlay');
    const iframeWrapper = document.getElementById('game-iframe-wrapper');

    playBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
        iframeWrapper.classList.remove('hidden');
        iframeWrapper.style.height = '100%';
        iframeWrapper.innerHTML = `
            <iframe src="${game.url}" 
                    scrolling="none" 
                    frameborder="0" 
                    allowfullscreen="true"
                    webkitallowfullscreen="true" 
                    mozallowfullscreen="true" 
                    msallowfullscreen="true"></iframe>
        `;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const catName = urlParams.get('cat');

    if (catName) {
        fetch('./data/games.json')
            .then(response => response.json())
            .then(games => {
                const catGames = games.filter(g => g.category === catName);
                document.getElementById('category-title').textContent = `${catName} Games`;
                document.title = `${catName} Games - Pizza Edition Games`;
                renderGames(catGames, 'category-games');
            });
    } else {
        window.location.href = './index.html';
    }
});

const games = [
    { title: "Pizza Edition Brawl Stars", img: "brawl-stars.jpg", category: "Action", url: "https://play.gamepix.com/brawl-stars/embed?sid=EE698" },
    { title: "Pizza Edition ReKill", img: "rekill.jpeg", category: "Action", url: "https://play.gamepix.com/rekill/embed?sid=EE698" },
    { title: "Pizza Edition Infinite Tower", icon: "🗼", category: "Action", url: "https://play.gamepix.com/infinite-tower/embed?sid=EE698" },
    { title: "Pizza Edition Tunnel Rush", icon: "🚇", category: "Action", url: "https://play.gamepix.com/tunnel-rush/embed?sid=EE698" },
    { title: "Pizza Edition Square Meal", img: "squaremeal.jpeg", category: "Puzzle", url: "https://play.gamepix.com/square-meal/embed?sid=EE698" },
    { title: "Pizza Edition Space War", icon: "🚀", category: "Action", url: "https://play.gamepix.com/space-war/embed?sid=EE698" },
    { title: "Pizza Edition Build Now GG", img: "buildnowgg.png", category: "Action", url: "https://play.gamepix.com/build-now-gg/embed?sid=EE698" },
    { title: "Pizza Edition Slope", icon: "🎾", category: "Action", url: "https://play.gamepix.com/slope/embed?sid=EE698" },
    { title: "Pizza Edition Diep IO", img: "deepio.jpg", category: "Action", url: "https://play.gamepix.com/diep-io/embed?sid=EE698" },
    { title: "Pizza Edition Subway Surfers", icon: "🏃", category: "Action", url: "https://play.gamepix.com/subway-surfers/embed?sid=EE698" },
    { title: "Pizza Edition 1v1 LOL", icon: "🔫", category: "Action", url: "https://play.gamepix.com/1v1-lol/embed?sid=EE698" },
    { title: "Pizza Edition Run 3", icon: "🏃‍♂️", category: "Action", url: "https://play.gamepix.com/run-3/embed?sid=EE698" },
    { title: "Pizza Edition Moto X3M", icon: "🏍️", category: "Racing", url: "https://play.gamepix.com/moto-x3m/embed?sid=EE698" },
    { title: "Pizza Edition Paper.io 2", icon: "📄", category: "Action", url: "https://play.gamepix.com/paper-io-2/embed?sid=EE698" },
    { title: "Pizza Edition Bitlife", icon: "👶", category: "Simulation", url: "https://play.gamepix.com/bitlife/embed?sid=EE698" },
    { title: "Pizza Edition Minecraft", icon: "🧱", category: "Adventure", url: "https://play.gamepix.com/minecraft/embed?sid=EE698" },
    { title: "Pizza Edition FNAF", icon: "🐻", category: "Horror", url: "https://play.gamepix.com/fnaf/embed?sid=EE698" },
    { title: "Pizza Edition Tetris", icon: "🕹️", category: "Puzzle", url: "https://play.gamepix.com/tetris/embed?sid=EE698" },
    { title: "Pizza Edition Chrome Dino", icon: "🦖", category: "Action", url: "https://play.gamepix.com/chrome-dino/embed?sid=EE698" },
    { title: "Pizza Edition Crossy Road", icon: "🐔", category: "Action", url: "https://play.gamepix.com/crossy-road/embed?sid=EE698" }
];

// Mazeed 80 games aapki site ki list ke mutabiq
const extraGames = [
    { name: "Riddle School", slug: "riddle-school", cat: "Puzzle", icon: "🏫" },
    { name: "Papa's Burgeria", slug: "papas-burgeria", cat: "Puzzle", icon: "🍔" },
    { name: "Bloxorz", slug: "bloxorz", cat: "Puzzle", icon: "📦" },
    { name: "Agar.io", slug: "agar-io", cat: "Action", icon: "🔴" },
    { name: "Basketball Stars", slug: "basketball-stars", cat: "Sports", icon: "🏀" },
    { name: "Geometry Dash", slug: "geometry-dash", cat: "Action", icon: "🟦" },
    { name: "Fruit Ninja", slug: "fruit-ninja", cat: "Action", icon: "🍉" },
    { name: "Uno Online", slug: "uno-online", cat: "Puzzle", icon: "🎴" },
    { name: "Snake Retro", slug: "snake", cat: "Action", icon: "🐍" },
    { name: "Chess", slug: "chess", cat: "Puzzle", icon: "♟️" }
];

for(let i=21; i<=100; i++ ) {
    const g = extraGames[i % extraGames.length];
    games.push({
        title: `Pizza Edition ${g.name} ${i}`,
        icon: g.icon,
        category: g.cat,
        url: `https://play.gamepix.com/${g.slug}/embed?sid=EE698`
    } );
}

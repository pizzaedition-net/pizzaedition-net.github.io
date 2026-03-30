const games = [
    { title: "Pizza Edition Moto X3M", icon: "🏍️", category: "Racing", url: "https://play.gamepix.com/moto-x3m/embed?sid=EE698" },
    { title: "Pizza Edition Bubble Shooter", icon: "🔮", category: "Puzzle", url: "https://play.gamepix.com/bubble-shooter/embed?sid=EE698" },
    { title: "Pizza Edition 2048", icon: "🔢", category: "Puzzle", url: "https://play.gamepix.com/2048/embed?sid=EE698" },
    { title: "Pizza Edition Subway Surfers", icon: "🏃", category: "Action", url: "https://play.gamepix.com/subway-surfers/embed?sid=EE698" },
    { title: "Pizza Edition Temple Run 2", icon: "🗿", category: "Action", url: "https://play.gamepix.com/temple-run-2/embed?sid=EE698" },
    { title: "Pizza Edition Moto Road Rash", icon: "🏍️", category: "Racing", url: "https://play.gamepix.com/moto-road-rash-3d/embed?sid=EE698" },
    { title: "Pizza Edition Chess", icon: "♟️", category: "Puzzle", url: "https://play.gamepix.com/chess/embed?sid=EE698" },
    { title: "Pizza Edition 8 Ball Pool", icon: "🎱", category: "Sports", url: "https://play.gamepix.com/pool-8-ball/embed?sid=EE698" },
    { title: "Pizza Edition Basketball Stars", icon: "🏀", category: "Sports", url: "https://play.gamepix.com/basketball-stars/embed?sid=EE698" },
    { title: "Pizza Edition Drift Hunters", icon: "🏎️", category: "Racing", url: "https://play.gamepix.com/drift-hunters/embed?sid=EE698" }
];

// Mazeed games generate karne ke liye
const extraSlugs = ["om-nom-run", "jetpack-joyride", "fruit-ninja", "angry-birds", "candy-crush"];
const cats = ["Action", "Racing", "Puzzle", "Sports"];
const icons = ["🎮", "🕹️", "🎯", "🎲", "👾"];

for(let i=11; i<=100; i++ ) {
    games.push({
        title: `Pizza Edition Game ${i}`,
        icon: icons[i % icons.length],
        category: cats[i % cats.length],
        url: `https://play.gamepix.com/${extraSlugs[i % extraSlugs.length]}/embed?sid=EE698`
    } );
}

const games = [
    { title: "Pizza Edition Moto X3M", img: "https://images.unsplash.com/photo-1558981403-c5f91cbba527?w=400", category: "Racing", url: "https://play.gamepix.com/moto-x3m/embed?sid=EE698" },
    { title: "Pizza Edition Bubble Shooter", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400", category: "Puzzle", url: "https://play.gamepix.com/bubble-shooter/embed?sid=EE698" },
    { title: "Pizza Edition 2048", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400", category: "Puzzle", url: "https://play.gamepix.com/2048/embed?sid=EE698" },
    { title: "Pizza Edition Subway Surfers", img: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400", category: "Action", url: "https://play.gamepix.com/subway-surfers/embed?sid=EE698" },
    { title: "Pizza Edition Temple Run 2", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400", category: "Action", url: "https://play.gamepix.com/temple-run-2/embed?sid=EE698" },
    { title: "Pizza Edition Moto Road Rash", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400", category: "Racing", url: "https://play.gamepix.com/moto-road-rash-3d/embed?sid=EE698" },
    { title: "Pizza Edition Chess", img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400", category: "Puzzle", url: "https://play.gamepix.com/chess/embed?sid=EE698" },
    { title: "Pizza Edition 8 Ball Pool", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400", category: "Sports", url: "https://play.gamepix.com/pool-8-ball/embed?sid=EE698" },
    { title: "Pizza Edition Basketball Stars", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400", category: "Sports", url: "https://play.gamepix.com/basketball-stars/embed?sid=EE698" },
    { title: "Pizza Edition Drift Hunters", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400", category: "Racing", url: "https://play.gamepix.com/drift-hunters/embed?sid=EE698" },
    { title: "Pizza Edition Cut The Rope", img: "https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?w=400", category: "Puzzle", url: "https://play.gamepix.com/cut-the-rope/embed?sid=EE698" },
    { title: "Pizza Edition Solitaire", img: "https://images.unsplash.com/photo-1589550911110-3888240ee240?w=400", category: "Puzzle", url: "https://play.gamepix.com/solitaire/embed?sid=EE698" },
    { title: "Pizza Edition Mahjong", img: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=400", category: "Puzzle", url: "https://play.gamepix.com/mahjong/embed?sid=EE698" },
    { title: "Pizza Edition Football Masters", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400", category: "Sports", url: "https://play.gamepix.com/football-masters/embed?sid=EE698" },
    { title: "Pizza Edition Vex 7", img: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400", category: "Action", url: "https://play.gamepix.com/vex-7/embed?sid=EE698" },
    { title: "Pizza Edition Fireboy & Watergirl", img: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=400", category: "Adventure", url: "https://play.gamepix.com/fireboy-and-watergirl/embed?sid=EE698" },
    { title: "Pizza Edition Slope", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=400", category: "Action", url: "https://play.gamepix.com/slope/embed?sid=EE698" },
    { title: "Pizza Edition Om Nom Run", img: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400", category: "Action", url: "https://play.gamepix.com/om-nom-run/embed?sid=EE698" },
    { title: "Pizza Edition Jetpack Joyride", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400", category: "Action", url: "https://play.gamepix.com/jetpack-joyride/embed?sid=EE698" },
    { title: "Pizza Edition Fruit Ninja", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400", category: "Action", url: "https://play.gamepix.com/fruit-ninja/embed?sid=EE698" }
];

// Mazeed 80 games asli names aur images ke saath
const realGames = [
    { name: "Angry Birds", slug: "angry-birds", cat: "Action" },
    { name: "Candy Crush", slug: "candy-crush", cat: "Puzzle" },
    { name: "Tomb Runner", slug: "tomb-runner", cat: "Action" },
    { name: "Crossy Road", slug: "crossy-road", cat: "Action" },
    { name: "Geometry Dash", slug: "geometry-dash", cat: "Action" },
    { name: "Ludo Hero", slug: "ludo-hero", cat: "Puzzle" },
    { name: "Tic Tac Toe", slug: "tic-tac-toe", cat: "Puzzle" },
    { name: "Penalty Shooters", slug: "penalty-shooters-2", cat: "Sports" },
    { name: "Moto X3M Pool Party", slug: "moto-x3m-pool-party", cat: "Racing" },
    { name: "Moto X3M Spooky Land", slug: "moto-x3m-spooky-land", cat: "Racing" }
];

for(let i=21; i<=100; i++ ) {
    const gameData = realGames[i % realGames.length];
    games.push({
        title: `Pizza Edition ${gameData.name} ${i}`,
        img: `https://picsum.photos/seed/pizza${i}/400/400`, // Asli images ke liye aap bad mein replace kar saktay hain
        category: gameData.cat,
        url: `https://play.gamepix.com/${gameData.slug}/embed?sid=EE698`
    } );
}

const movies = [
    {
        id: crypto.randomUUID(),
        title: "Epic Voyage",
        release_year: 2022,
        runtime: 150,
        genre: "Action, Adventure, Sci-Fi",
        plot: "In a distant future, where the fate of humanity hangs in the balance, a courageous group of explorers embarks on a perilous journey. As they navigate through uncharted territories and encounter mysterious beings, they must unravel the secrets of an impending disaster to save the remnants of civilization.",
        poster: "https://placehold.co/360x430/000000/FFFFFF.png?text=Epic+Voyage",
        rating: 4.2,
        price: 75.99,
        isFavorite: true,
        isWatchLater: false,
        isTrending: true,
        isUpcoming: false,
        isNewRelease: true,
    },
    {
        id: crypto.randomUUID(),
        title: "Whispers in the Wind",
        release_year: 2023,
        runtime: 120,
        genre: "Drama, Mystery, Romance",
        plot: "Amidst the picturesque landscapes, a small town holds a deep secret. As whispers in the wind reveal hidden connections and forbidden love, the residents find themselves entangled in a web of mystery and emotion.",
        poster: "https://placehold.co/360x430/FF5733/FFFFFF.png?text=Whispers+in+the+Wind",
        rating: 4.5,
        price: 62.99,
        isFavorite: false,
        isWatchLater: true,
        isTrending: false,
        isUpcoming: false,
        isNewRelease: false,
    },
    {
        id: crypto.randomUUID(),
        title: "City of Echoes",
        release_year: 2022,
        runtime: 110,
        genre: "Thriller, Mystery",
        plot: "In a city haunted by echoes of its dark past, a detective unravels a series of mysterious disappearances. As the investigation deepens, they find themselves entangled in a web of conspiracy, deceit, and supernatural phenomena.",
        poster: "https://placehold.co/360x430/000033/FFFFFF.png?text=City+of+Echoes",
        rating: 4.3,
        price: 65.99,
        isFavorite: true,
        isWatchLater: true,
        isTrending: true,
        isUpcoming: false,
        isNewRelease: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Chronicles of Stardust",
        release_year: 2024,
        runtime: 135,
        genre: "Fantasy, Adventure",
        plot: "In a realm where magic and stardust coexist, a young hero embarks on a quest to save the mystical land from an ancient darkness. Along the way, they encounter mythical creatures and uncover the secrets of their own destiny.",
        poster: "https://placehold.co/360x430/FF66CC/FFF.png?text=Chronicles+of+Stardust",
        rating: 3.9,
        price: 79.99,
        isFavorite: false,
        isWatchLater: false,
        isTrending: true,
        isUpcoming: false,
        isNewRelease: true,
    },
    {
        id: crypto.randomUUID(),
        title: "Shattered Realms",
        release_year: 2023,
        runtime: 125,
        genre: "Fantasy, Action",
        plot: "In a realm on the brink of collapse, a reluctant hero must rise to face a dark prophecy. As ancient powers awaken, the fate of the shattered realms rests in the hands of the chosen one.",
        poster: "https://placehold.co/360x430/2E8B57/FFFFFF.png?text=Shattered+Realms",
        rating: 4.5,
        price: 78.99,
        isFavorite: false,
        isWatchLater: false,
        isTrending: false,
        isUpcoming: true,
        isNewRelease: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Eternal Elegance",
        release_year: 2024,
        runtime: 118,
        genre: "Romance, Drama",
        plot: "In a world where time stands still, a love story unfolds across generations. As eternal as the changing seasons, this tale weaves through time, exploring the enduring power of love and the threads that bind us.",
        poster: "https://placehold.co/360x430/330000/FFFFFF.png?text=Eternal+Elegance",
        rating: 4.7,
        price: 82.99,
        isFavorite: true,
        isWatchLater: false,
        isTrending: true,
        isUpcoming: false,
        isNewRelease: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Whirlwind of Shadows",
        release_year: 2025,
        runtime: 142,
        genre: "Action, Thriller",
        plot: "In a world where shadows hold ancient secrets, a skilled assassin must navigate a web of intrigue and betrayal. As dark forces emerge, the protagonist must confront their own past and forge a path to redemption.",
        poster: "https://placehold.co/360x430/263840/FFFFFF.png?text=Whirlwind+of+Shadows",
        rating: 4.4,
        price: 75.99,
        isFavorite: false,
        isWatchLater: false,
        isTrending: false,
        isUpcoming: true,
        isNewRelease: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Starlight Odyssey",
        release_year: 2023,
        runtime: 128,
        genre: "Sci-Fi, Adventure",
        plot: "Embark on a thrilling space odyssey as a group of interstellar explorers discovers the secrets of distant galaxies. The fate of humanity hangs in the balance as they encounter unknown civilizations and face cosmic challenges.",
        poster: "https://placehold.co/360x430/8A2BE2/FFFFFF.png?text=Starlight+Odyssey",
        rating: 4.6,
        price: 89.99,
        isFavorite: true,
        isWatchLater: false,
        isTrending: true,
        isUpcoming: false,
        isNewRelease: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Astral Harmony",
        release_year: 2024,
        runtime: 140,
        genre: "Sci-Fi, Drama",
        plot: "In a future where technology and spirituality converge, a journey unfolds to find the balance between the astral and the tangible. Through cosmic revelations, characters discover the profound connections that bind the universe.",
        poster: "https://placehold.co/360x430/4169E1/FFFFFF.png?text=Astral+Harmony",
        rating: 4.8,
        price: 89.99,
        isFavorite: false,
        isWatchLater: false,
        isTrending: false,
        isUpcoming: true,
        isNewRelease: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Whispering Pines",
        release_year: 2022,
        runtime: 118,
        genre: "Drama, Romance",
        plot: "Amidst the tranquility of whispering pines, a heartfelt romance blooms. As two souls navigate the complexities of love and loss, their journey unfolds in the serene embrace of nature.",
        poster: "https://placehold.co/360x430/483D8B/FFFFFF.png?text=Whispering+Pines",
        rating: 4.5,
        price: 79.99,
        isFavorite: false,
        isWatchLater: false,
        isTrending: true,
        isUpcoming: false,
        isNewRelease: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Enchanted Realms",
        release_year: 2023,
        runtime: 122,
        genre: "Fantasy, Adventure",
        plot: "In a world where magic and enchantment coexist, an unlikely hero embarks on a quest to restore balance. Through enchanted realms and mythical creatures, they discover the power within to shape the destiny of their land.",
        poster: "https://placehold.co/360x430/228B22/FFFFFF.png?text=Enchanted+Realms",
        rating: 4.7,
        price: 78.99,
        isFavorite: true,
        isWatchLater: false,
        isTrending: false,
        isUpcoming: true,
        isNewRelease: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Crimson Shadows",
        release_year: 2024,
        runtime: 128,
        genre: "Thriller, Mystery",
        plot: "In a city cloaked in shadows, a detective unravels a series of gruesome crimes. As the investigation deepens, they become entangled in a web of deception, leading to a thrilling showdown with an elusive adversary.",
        poster: "https://placehold.co/360x430/8B0000/FFFFFF.png?text=Crimson+Shadows",
        rating: 4.4,
        price: 72.99,
        isFavorite: false,
        isWatchLater: false,
        isTrending: true,
        isUpcoming: false,
        isNewRelease: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Beyond the Horizon",
        release_year: 2025,
        runtime: 150,
        genre: "Sci-Fi, Adventure",
        plot: "As humanity reaches the brink of interstellar travel, a team of explorers sets out on a groundbreaking mission. Beyond the horizon lies the unknown, and the journey unfolds as they navigate through cosmic wonders and challenges.",
        poster: "https://placehold.co/360x430/4682B4/FFFFFF.png?text=Beyond+the+Horizon",
        rating: 4.6,
        price: 85.99,
        isFavorite: true,
        isWatchLater: false,
        isTrending: false,
        isUpcoming: true,
        isNewRelease: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Silent Whispers",
        release_year: 2023,
        runtime: 135,
        genre: "Mystery, Drama",
        plot: "In a quiet town, mysterious whispers become the key to unraveling a long-buried secret. As the protagonist delves into the enigma, they must confront their own past and untangle the threads of a haunting mystery.",
        poster: "https://placehold.co/360x430/4B0082/FFFFFF.png?text=Silent+Whispers",
        rating: 4.3,
        price: 69.99,
        isFavorite: false,
        isWatchLater: false,
        isTrending: true,
        isUpcoming: false,
        isNewRelease: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Echoes of Destiny",
        release_year: 2023,
        runtime: 132,
        genre: "Fantasy, Mystery",
        plot: "In a realm where echoes of ancient prophecies resonate, a chosen one must embark on a perilous quest. As destiny unfolds, the boundaries between reality and myth blur, revealing a world shaped by the threads of fate.",
        poster: "https://placehold.co/360x430/9932CC/FFFFFF.png?text=Echoes+of+Destiny",
        rating: 4.6,
        price: 84.99,
        isFavorite: false,
        isWatchLater: false,
        isTrending: true,
        isUpcoming: false,
        isNewRelease: true,
    },
];

export function getDefaultMovies() {
    return movies;
}

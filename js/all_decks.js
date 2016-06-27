/**
 * Black deck object
 * @constructor
 */
function BlackDeck(parent){
    this.parent = parent;
    this.deck = [
        {
            name: "Animate Dead",
            smallImage: "images/card_faces/black/animate_dead_sm.jpg",
            fullImage: "images/card_faces/black/animate_dead_lg.jpg",
            ability: "activate the ability of a random creature you have already played"
            set: "Alpha",
            artist: "Anson Maddocks"
        },
        {
            name: "Dark Ritual",
            smallImage: "images/card_faces/black/dark_ritual_sm.jpg",
            fullImage: "images/card_faces/black/dark_ritual_lg.jpg",
            ability: "double the damage to opponent and to you from next card you play",
            set: "Alpha",
            artist: "Sandra Everingham"
        },
        {
            name: "Drain Life",
            smallImage: "images/card_faces/black/drain_life_sm.jpg",
            fullImage: "images/card_faces/black/drain_life_lg.jpg",
            ability: "deal 3 damage + # of matches to player and gain that much life"
            set: "Alpha",
            artist: "Douglas Schuler"
        },
        {
            name: "Hypnotic Specter",
            smallImage: "images/card_faces/black/hypnotic_specter_sm.jpg",
            fullImage: "images/card_faces/black/hypnotic_specter_lg.jpg",
            ability: "2 damage + # of matches",
            set: "Alpha",
            artist: "Douglas Schuler"
        },
        {
            name: "Juzam Djinn",
            smallImage: "images/card_faces/black/juzam_djinn_sm.jpg",
            fullImage: "images/card_faces/black/juzam_djinn_lg.jpg",
            ability: "4 damage + # of matches, deals 1 damage to owner when played",
            set: "Arabian Nights",
            artist: "Mark Tedin"
        },
        {
            name: "Lord of the Pit",
            smallImage: "images/card_faces/black/lord_of_the_pit_sm.jpg",
            fullImage: "images/card_faces/black/lord_of_the_pit_lg.jpg",
            ability: "8 damage + # of matches, deals 3 damage to owner when played",
            set: "Alpha",
            artist: "Mark Tedin"
        },
        {
            name: "Nantuko Husk",
            smallImage: "images/card_faces/black/nantuko_husk_sm.jpg",
            fullImage: "images/card_faces/black/nantuko_husk_lg.jpg",
            ability: "damage = 2 + # of matches",
            set: "Onslaught",
            artist: "Carl Critchlow"
        },
        {
            name: "Nightmare",
            smallImage: "images/card_faces/black/nightmare_sm.jpg",
            fullImage: "images/card_faces/black/nightmare_lg.jpg",
            ability: "3 damage + # of matches",
            set: "Alpha",
            artist: "Melissa Benson"
        },
        {
            name: "Sengir Vampire",
            smallImage: "images/card_faces/black/sengir_vampire_sm.jpg",
            fullImage: "images/card_faces/black/sengir_vampire_lg.jpg",
            ability: "4 damage + # of matches",
            set: "Alpha",
            artist: "Anson Maddocks"
        }
    ];
}


/**
 * Blue deck object
 * @constructor
 */
function BlueDeck(parent){
    this.parent = parent;
    this.deck = [
        {
            name: "Air Elemental",
            smallImage: "images/card_faces/blue/air_elemental_sm.jpeg",
            fullImage: "images/card_faces/blue/air_elemental_lg.jpg",
            ability: "deal 4 damage",
            set: "Alpha",
            artist: "Richard Thomas"
        },
        {
            name: "Braingeyser",
            smallImage: "images/card_faces/blue/braingeyser_sm.jpeg",
            fullImage: "images/card_faces/blue/braingeyser_lg.jpg",
            ability: "remove 1 random opponent ability if any are still in play.",
            set: "Alpha",
            artist: "Mark Tedin"
        },
        {
            name: "Force of Will",
            smallImage: "images/card_faces/blue/force_of_will_sm.jpeg",
            fullImage: "images/card_faces/blue/force_of_will_lg.jpg",
            ability: "prevent the next damage to be dealt to you, pay 1 life",
            set: "Alliances",
            artist: "Terese Nielsen"
        },
        {
            name: "Keiga, the Tide Star",
            smallImage: "images/card_faces/blue/keiga_sm.jpeg",
            fullImage: "images/card_faces/blue/keiga_lg.jpg",
            ability: "deal 5 damage + # of opponent's matches",
            set: "Champions of Kamigawa",
            artist: "Ittoku"
        },
        {
            name: "Lord of Atlantis",
            smallImage: "images/card_faces/blue/lord_of_atlantis_sm.jpg",
            fullImage: "images/card_faces/blue/lord_of_atlantis_lg.jpg",
            ability: "deal 2 damage, add 2 damage to all further matches that deal damage",
            set: "Alpha",
            artist: "Melissa Benson"
        },
        {
            name: "Mana Drain",
            smallImage: "images/card_faces/blue/mana_drain_sm.jpg",
            fullImage: "images/card_faces/blue/mana_drain_lg.jpg",
            ability: "prevent the next damage to be dealt to you, then deal that damage to the opponent instead",
            set: "Legends",
            artist: "Mark Tedin"
        },
        {
            name: "Polar Kraken",
            smallImage: "images/card_faces/blue/polar_kraken_sm.jpg",
            fullImage: "images/card_faces/blue/polar_kraken_lg.jpg",
            ability: "deal 10 damage + 1/2 # of matches to opponent, and 1/2 that damage to you",
            set: "Ice Age",
            artist: "Mark Tedin"
        },
        {
            name: "Soulblade Djinn",
            smallImage: "images/card_faces/blue/soulblade_djinn_sm.jpg",
            fullImage: "images/card_faces/blue/soulblade_djinn_lg.jpg",
            ability: "deal 2 damage to opponent, add 1 damage to all further damage you deal",
            set: "Magic Origins",
            artist: "Viktor Titov"
        },
        {
            name: "Time Walk",
            smallImage: "images/card_faces/blue/time_walk_sm.jpg",
            fullImage: "images/card_faces/blue/time_walk_lg.jpg",
            ability: "You take 1 extra turn after missing a match",
            set: "Alpha",
            artist: "Amy Weber"
        }
    ];
}


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
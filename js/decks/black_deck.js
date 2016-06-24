
/**
 * White deck object
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
        },
        {
            name: "Dark Ritual",
            smallImage: "images/card_faces/black/dark_ritual_sm.jpg",
            fullImage: "images/card_faces/black/dark_ritual_lg.jpg",
            ability: "double the damage to opponent and to you from next card you play"
        },
        {
            name: "Drain Life",
            smallImage: "images/card_faces/black/drain_life_sm.jpg",
            fullImage: "images/card_faces/black/drain_life_lg.jpg",
            ability: "deal 3 damage + # of matches to player and gain that much life"
        },
        {
            name: "Hypnotic Specter",
            smallImage: "images/card_faces/black/hypnotic_specter_sm.jpg",
            fullImage: "images/card_faces/black/hypnotic_specter_lg.jpg",
            ability: "2 damage + # of matches"
        },
        {
            name: "Juzam Djinn",
            smallImage: "images/card_faces/black/juzam_djinn_sm.jpg",
            fullImage: "images/card_faces/black/juzam_djinn_lg.jpg",
            ability: "4 damage + # of matches, deals 1 damage to owner when played"
        },
        {
            name: "Lord of the Pit",
            smallImage: "images/card_faces/black/lord_of_the_pit_sm.jpg",
            fullImage: "images/card_faces/black/lord_of_the_pit_lg.jpg",
            ability: "8 damage + # of matches, deals 3 damage to owner when played"
        },
        {
            name: "Nantuko Husk",
            smallImage: "images/card_faces/black/nantuko_husk_sm.jpg",
            fullImage: "images/card_faces/black/nantuko_husk_lg.jpg",
            ability: "damage = 2 + # of matches"
        },
        {
            name: "Nightmare",
            smallImage: "images/card_faces/black/nightmare_sm.jpg",
            fullImage: "images/card_faces/black/nightmare_lg.jpg",
            ability: "3 damage + # of matches"
        },
        {
            name: "Sengir Vampire",
            smallImage: "images/card_faces/black/sengir_vampire_sm.jpg",
            fullImage: "images/card_faces/black/sengir_vampire_lg.jpg",
            ability: "4 damage + # of matches"
        }
    ];
}
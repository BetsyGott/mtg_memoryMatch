
/**
 * White deck object
 * @constructor
 */
function GreenDeck(parent){
    this.parent = parent;
    this.deck = [
        {
            name: "Birds of Paradise",
            smallImage: "images/card_faces/green/birds_of_paradise_sm.jpg",
            fullImage: "images/card_faces/green/birds_of_paradise_lg.jpg",
            ability: "1 damage + 1 damage added to all further matches"
        },
        {
            name: "Craw Wurm",
            smallImage: "images/card_faces/green/craw_wurm_sm.jpg",
            fullImage: "images/card_faces/green/craw_wurm_lg.jpg",
            ability: "6 damage"
        },
        {
            name: "Ernham Djinn",
            smallImage: "images/card_faces/green/ernham_djinn_sm.jpg",
            fullImage: "images/card_faces/green/ernham_djinn_lg.jpg",
            ability: "4 damage and 2 damage to you"
        },
        {
            name: "Fog",
            smallImage: "images/card_faces/green/fog_sm.jpg",
            fullImage: "images/card_faces/green/fog_lg.jpg",
            ability: "prevent all damage dealt by next opponent match"
        },
        {
            name: "Giant Growth",
            smallImage: "images/card_faces/green/samite_healer_sm.jpg",
            fullImage: "images/card_faces/green/samite_healer_lg.jpg",
            ability: "double next damage dealt by a match you make"
        },
        {
            name: "Llanowar Elves",
            smallImage: "images/card_faces/green/llanowar_elves_sm.jpg",
            fullImage: "images/card_faces/green/llanowar_elves_lg.jpg",
            ability: "deal 2 damage + # of matches"
        },
        {
            name: "Rancor",
            smallImage: "images/card_faces/green/rancor_sm.jpg",
            fullImage: "images/card_faces/green/rancor_lg.jpg",
            ability: "add 3 damage to all further cards"
        },
        {
            name: "Sylvan Library",
            smallImage: "images/card_faces/green/sylvan_library_sm.jpg",
            fullImage: "images/card_faces/green/sylvan_library_lg.jpg",
            ability: "pay 2 life to add 4 damage to your next card, stays for remainder of game?"
        },
        {
            name: "Tarmagoyf",
            smallImage: "images/card_faces/green/tarmagoyf_sm.jpg",
            fullImage: "images/card_faces/green/tarmagoyf_lg.jpg",
            ability: "2 damage * # of matches"
        }
    ];
}
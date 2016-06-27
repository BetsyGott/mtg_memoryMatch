
/**
 * Green deck object
 * @constructor
 */
function GreenDeck(parent){
    this.parent = parent;
    this.deck = [
        {
            name: "Birds of Paradise",
            smallImage: "images/card_faces/green/birds_of_paradise_sm.jpg",
            fullImage: "images/card_faces/green/birds_of_paradise_lg.jpg",
            ability: "1 damage + 1 damage added to all further matches",
            set: "Alpha",
            artist: "Mark Poole"
        },
        {
            name: "Craw Wurm",
            smallImage: "images/card_faces/green/craw_wurm_sm.jpg",
            fullImage: "images/card_faces/green/craw_wurm_lg.jpg",
            ability: "6 damage",
            set: "8th Edition",
            artist:"Heather Hudson"
        },
        {
            name: "Erhnam Djinn",
            smallImage: "images/card_faces/green/erhnam_djinn_sm.jpg",
            fullImage: "images/card_faces/green/erhnam_djinn_lg.jpg",
            ability: "4 damage and 2 damage to you",
            set: "Arabian Nights",
            artist: "Ken Meyer Jr."
        },
        {
            name: "Fog",
            smallImage: "images/card_faces/green/fog_sm.jpg",
            fullImage: "images/card_faces/green/fog_lg.jpg",
            ability: "prevent all damage dealt by next opponent match",
            set: "Core Set 2012",
            artist: "Jaime Jones"
        },
        {
            name: "Giant Growth",
            smallImage: "images/card_faces/green/giant_growth_sm.jpg",
            fullImage: "images/card_faces/green/giant_growth_lg.jpg",
            ability: "double next damage dealt by a match you make",
            set: "Core Set 10th Edition",
            artist: "Matt Cavotta"
        },
        {
            name: "Llanowar Elves",
            smallImage: "images/card_faces/green/llanowar_elves_sm.jpg",
            fullImage: "images/card_faces/green/llanowar_elves_lg.jpg",
            ability: "deal 2 damage + # of matches",
            set: "Alpha",
            artist: "Anson Maddocks"
        },
        {
            name: "Rancor",
            smallImage: "images/card_faces/green/rancor_sm.jpg",
            fullImage: "images/card_faces/green/rancor_lg.jpg",
            ability: "add 3 damage to all further cards",
            set: "Urza's Legacy",
            artist: "Kev Walker"
        },
        {
            name: "Sylvan Library",
            smallImage: "images/card_faces/green/sylvan_library_sm.jpg",
            fullImage: "images/card_faces/green/sylvan_library_lg.jpg",
            ability: "pay 2 life to add 4 damage to your next card, stays for remainder of game?",
            set: "Legends",
            artist: "Harold McNeill"
        },
        {
            name: "Tarmogoyf",
            smallImage: "images/card_faces/green/tarmogoyf_sm.jpg",
            fullImage: "images/card_faces/green/tarmogoyf_lg.jpg",
            ability: "2 damage * # of matches",
            set: "Modern Masters",
            artist: "Ryan Barger"
        }
    ];
}
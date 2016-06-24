
/**
 * White deck object
 * @constructor
 */
function WhiteDeck(parent){
    this.parent = parent;
    this.deck = [
        {
            name: "Balance",
            smallImage: "images/card_faces/white/balance_sm.jpg",
            fullImage: "images/card_faces/white/balance_lg.jpg",
            ability: "if your opponent has more life than you do, he has the same life as you do. Otherwise, you get his life total"
        },
        {
            name: "Congregate",
            smallImage: "images/card_faces/white/congregate_sm.jpg",
            fullImage: "images/card_faces/white/congregate_lg.jpg",
            ability: "gain 2 life + # of matches"
        },
        {
            name: "Knight of the White Orchid",
            smallImage: "images/card_faces/white/knight_of_the_white_orchid_sm.jpg",
            fullImage: "images/card_faces/white/knight_of_the_white_orchid_lg.jpg",
            ability: "2 damage + # of matches"
        },
        {
            name: "Mesa Pegasus",
            smallImage: "images/card_faces/white/mesa_pegasus_sm.jpg",
            fullImage: "images/card_faces/white/mesa_pegasus_lg.jpg",
            ability: "1 damage + # of matches"
        },
        {
            name: "Samite Healer",
            smallImage: "images/card_faces/white/samite_healer_sm.jpg",
            fullImage: "images/card_faces/white/samite_healer_lg.jpg",
            ability: "gain 2 life, damage dealt to you is reduced by 1"
        },
        {
            name: "Serra Angel",
            smallImage: "images/card_faces/white/serra_angel_sm.png",
            fullImage: "images/card_faces/white/serra_angel_lg.png",
            ability: "4 damage + # of matches"
        },
        {
            name: "Swords to Plowshares",
            smallImage: "images/card_faces/white/swords_to_plowshares_sm.jpg",
            fullImage: "images/card_faces/white/swords_to_plowshares_lg.jpg",
            ability: "prevent all damage from next source"
        },
        {
            name: "Wrath of God",
            smallImage: "images/card_faces/white/wrath_of_god_sm.jpg",
            fullImage: "images/card_faces/white/wrath_of_god_lg.jpg",
            ability: "prevent all damage from next source and remove all opponent's active abilities"
        },
        {
            name: "Yosei, the Morning Star",
            smallImage: "images/card_faces/white/yosei_the_morning_star_sm.jpeg",
            fullImage: "images/card_faces/white/yosei_the_morning_star_lg.jpg",
            ability: "8 damage + # of matches"
        }
    ];
}
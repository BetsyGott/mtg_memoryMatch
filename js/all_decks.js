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
            ability: "activate the ability of a random creature you have already played",
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
            ability: "deal 3 damage + # of matches to player and gain that much life",
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


/**
 * Red deck object
 * @constructor
 */
function RedDeck(parent){
    this.parent = parent;
    this.deck = [
        {
            name: "Akroma, Angel of Fury",
            smallImage: "images/card_faces/red/akroma_angel_of_fury_sm.jpg",
            fullImage: "images/card_faces/red/akroma_angel_of_fury_lg.jpg",
            ability: "deal 6 damage + # of matches, cannot be prevented",
            set: "From the Vault",
            artist:"Terese Nielsen"
        },
        {
            name: "Blood Moon",
            smallImage: "images/card_faces/red/blood_moon_sm.jpg",
            fullImage: "images/card_faces/red/blood_moon_lg.jpg",
            ability: "double next damage dealt by your source",
            set: "8th Edition",
            artist: "Franz Vohwinkel"
        },
        {
            name: "Goblin King",
            smallImage: "images/card_faces/red/goblin_king_sm.jpg",
            fullImage: "images/card_faces/red/goblin_king_lg.jpg",
            ability: "2 damage + # of matches",
            set: "7th Edition",
            artist: "Ron Spears"
        },
        {
            name: "Incinerate",
            smallImage: "images/card_faces/red/incinerate_sm.jpg",
            fullImage: "images/card_faces/red/incinerate_lg.jpg",
            ability: "deal 2 damage * # of matches",
            set: "Mirage",
            artist: "Brian Snoddy"
        },
        {
            name: "Lightning Bolt",
            smallImage: "images/card_faces/red/lightning_bolt_sm.jpg",
            fullImage: "images/card_faces/red/lightning_bolt_lg.jpg",
            ability: "if first match, deal 6 damage, otherwise, deal 3 damage",
            set: "Alpha",
            artist: "Christopher Rush"
        },
        {
            name: "Shivan Dragon",
            smallImage: "images/card_faces/red/shivan_dragon_sm.jpg",
            fullImage: "images/card_faces/red/shivan_dragon_lg.jpg",
            ability: "deal 6 damage",
            set: "Alpha",
            artist: "Melissa Benson"
        },
        {
            name: "Simian Spirit Guide",
            smallImage: "images/card_faces/red/simian_spirit_guide_sm.jpg",
            fullImage: "images/card_faces/red/simian_spirit_guide_lg.jpg",
            ability: "deal 2 damage + # of matches",
            set: "Planar Chaos",
            artist: "Dave DeVries"
        },
        {
            name: "Starstorm",
            smallImage: "images/card_faces/red/starstorm_sm.jpg",
            fullImage: "images/card_faces/red/starstorm_lg.jpg",
            ability: "deal damage = 1 + # of matches to opponent and to you",
            set: "Onslaught",
            artist: "David Martin"
        },
        {
            name: "Wheel of Fortune",
            smallImage: "images/card_faces/red/wheel_of_fortune_sm.jpg",
            fullImage: "images/card_faces/red/wheel_of_fortune_lg.jpg",
            ability: "play a random ability from a match you have already made",
            set: "Alpha",
            artist: "Daniel Gelon"
        }
    ];
}


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
            ability: "if your opponent has more life than you do, he has the same life as you do. Otherwise, you get his life total",
            set: "Alpha",
            artist: "Mark Poole"
        },
        {
            name: "Congregate",
            smallImage: "images/card_faces/white/congregate_sm.jpg",
            fullImage: "images/card_faces/white/congregate_lg.jpg",
            ability: "gain 2 life + # of matches",
            set: "Urza's Saga",
            artist: "Mark Zug"
        },
        {
            name: "Knight of the White Orchid",
            smallImage: "images/card_faces/white/knight_of_the_white_orchid_sm.jpg",
            fullImage: "images/card_faces/white/knight_of_the_white_orchid_lg.jpg",
            ability: "2 damage + # of matches",
            set: "Shards of Alara",
            artist: "Mark Zug"
        },
        {
            name: "Mesa Pegasus",
            smallImage: "images/card_faces/white/mesa_pegasus_sm.jpg",
            fullImage: "images/card_faces/white/mesa_pegasus_lg.jpg",
            ability: "1 damage + # of matches",
            set: "Alpha",
            artist: "Melissa Benson"
        },
        {
            name: "Samite Healer",
            smallImage: "images/card_faces/white/samite_healer_sm.jpg",
            fullImage: "images/card_faces/white/samite_healer_lg.jpg",
            ability: "gain 2 life, damage dealt to you is reduced by 1",
            set: "7th Edition",
            artist: "Anson Maddocks"
        },
        {
            name: "Serra Angel",
            smallImage: "images/card_faces/white/serra_angel_sm.png",
            fullImage: "images/card_faces/white/serra_angel_lg.png",
            ability: "4 damage + # of matches",
            set: "Alpha",
            artist: "Douglas Schuler"
        },
        {
            name: "Swords to Plowshares",
            smallImage: "images/card_faces/white/swords_to_plowshares_sm.jpg",
            fullImage: "images/card_faces/white/swords_to_plowshares_lg.jpg",
            ability: "prevent all damage from next source",
            set: "Alpha",
            artist: "Jeff A. Menges"
        },
        {
            name: "Wrath of God",
            smallImage: "images/card_faces/white/wrath_of_god_sm.jpg",
            fullImage: "images/card_faces/white/wrath_of_god_lg.jpg",
            ability: "prevent all damage from next source and remove all opponent's active abilities",
            set: "Alpha",
            artist: "Quinton Hoover"
        },
        {
            name: "Yosei, the Morning Star",
            smallImage: "images/card_faces/white/yosei_the_morning_star_sm.jpg",
            fullImage: "images/card_faces/white/yosei_the_morning_star_lg.jpeg",
            ability: "8 damage + # of matches",
            set: "Champions of Kamigawa",
            artist: "Hiro Izawa"
        }
    ];
}

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
            ability: "Activate the ability of a random match you've already made.",
            set: "Alpha",
            artist: "Anson Maddocks"
        },
        {
            name: "Dark Ritual",
            smallImage: "images/card_faces/black/dark_ritual_sm.jpg",
            fullImage: "images/card_faces/black/dark_ritual_lg.jpg",
            ability: "The damage from your next match is doubled.",
            set: "Alpha",
            artist: "Sandra Everingham"
        },
        {
            name: "Drain Life",
            smallImage: "images/card_faces/black/drain_life_sm.jpg",
            fullImage: "images/card_faces/black/drain_life_lg.jpg",
            ability: "Deal 3 damage + your match count to your opponent. Gain that much life.",
            set: "Alpha",
            artist: "Douglas Schuler"
        },
        {
            name: "Hypnotic Specter",
            smallImage: "images/card_faces/black/hypnotic_specter_sm.jpg",
            fullImage: "images/card_faces/black/hypnotic_specter_lg.jpg",
            ability: "Deal 2 damage + your match count to your opponent.",
            set: "Alpha",
            artist: "Douglas Schuler"
        },
        {
            name: "Juzam Djinn",
            smallImage: "images/card_faces/black/juzam_djinn_sm.jpg",
            fullImage: "images/card_faces/black/juzam_djinn_lg.jpg",
            ability: "Deal 4 damage + your match count to your opponent. Take 1 damage.",
            set: "Arabian Nights",
            artist: "Mark Tedin"
        },
        {
            name: "Lord of the Pit",
            smallImage: "images/card_faces/black/lord_of_the_pit_sm.jpg",
            fullImage: "images/card_faces/black/lord_of_the_pit_lg.jpg",
            ability: "Deal 8 damage + your match count to your opponent. Take 3 damage.",
            set: "Alpha",
            artist: "Mark Tedin"
        },
        {
            name: "Nantuko Husk",
            smallImage: "images/card_faces/black/nantuko_husk_sm.jpg",
            fullImage: "images/card_faces/black/nantuko_husk_lg.jpg",
            ability: "Deal 2 damage + your match count.",
            set: "Onslaught",
            artist: "Carl Critchlow"
        },
        {
            name: "Nightmare",
            smallImage: "images/card_faces/black/nightmare_sm.jpg",
            fullImage: "images/card_faces/black/nightmare_lg.jpg",
            ability: "Deal 3 damage + your match count.",
            set: "Alpha",
            artist: "Melissa Benson"
        },
        {
            name: "Sengir Vampire",
            smallImage: "images/card_faces/black/sengir_vampire_sm.jpg",
            fullImage: "images/card_faces/black/sengir_vampire_lg.jpg",
            ability: "Deal 4 damage + your match count.",
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
            ability: "Deal 4 damage.",
            set: "Alpha",
            artist: "Richard Thomas"
        },
        {
            name: "Braingeyser",
            smallImage: "images/card_faces/blue/braingeyser_sm.jpeg",
            fullImage: "images/card_faces/blue/braingeyser_lg.jpg",
            ability: "Remove 1 opponent ability at random from any still in play.",
            set: "Alpha",
            artist: "Mark Tedin"
        },
        {
            name: "Force of Will",
            smallImage: "images/card_faces/blue/force_of_will_sm.jpeg",
            fullImage: "images/card_faces/blue/force_of_will_lg.jpg",
            ability: "Prevent the next damage from an opponent match. Take 1 damage.",
            set: "Alliances",
            artist: "Terese Nielsen"
        },
        {
            name: "Keiga, the Tide Star",
            smallImage: "images/card_faces/blue/keiga_sm.jpeg",
            fullImage: "images/card_faces/blue/keiga_lg.jpg",
            ability: "Deal 5 damage + your opponent's match count.",
            set: "Champions of Kamigawa",
            artist: "Ittoku"
        },
        {
            name: "Lord of Atlantis",
            smallImage: "images/card_faces/blue/lord_of_atlantis_sm.jpg",
            fullImage: "images/card_faces/blue/lord_of_atlantis_lg.jpg",
            ability: "Deal 2 damage. Add +2 to all further damage you deal.",
            set: "Alpha",
            artist: "Melissa Benson"
        },
        {
            name: "Mana Drain",
            smallImage: "images/card_faces/blue/mana_drain_sm.jpg",
            fullImage: "images/card_faces/blue/mana_drain_lg.jpg",
            ability: "Prevent the next damage to be dealt to you from any source. Deal that damage to your opponent instead.",
            set: "Legends",
            artist: "Mark Tedin"
        },
        {
            name: "Polar Kraken",
            smallImage: "images/card_faces/blue/polar_kraken_sm.jpg",
            fullImage: "images/card_faces/blue/polar_kraken_lg.jpg",
            ability: "Deal 10 damage + &frac12; your match count to opponent. You take &frac12; that damage.",
            set: "Ice Age",
            artist: "Mark Tedin"
        },
        {
            name: "Soulblade Djinn",
            smallImage: "images/card_faces/blue/soulblade_djinn_sm.jpg",
            fullImage: "images/card_faces/blue/soulblade_djinn_lg.jpg",
            ability: "Deal 2 damage to opponent. Add +1 to all further damage you deal.",
            set: "Magic Origins",
            artist: "Viktor Titov"
        },
        {
            name: "Time Walk",
            smallImage: "images/card_faces/blue/time_walk_sm.jpg",
            fullImage: "images/card_faces/blue/time_walk_lg.jpg",
            ability: "You take 1 extra turn after missing your next match.",
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
            ability: "Deal 1 damage. Add +1 to all further damage you deal.",
            set: "Alpha",
            artist: "Mark Poole"
        },
        {
            name: "Craw Wurm",
            smallImage: "images/card_faces/green/craw_wurm_sm.jpg",
            fullImage: "images/card_faces/green/craw_wurm_lg.jpg",
            ability: "Deal 6 damage.",
            set: "8th Edition",
            artist:"Heather Hudson"
        },
        {
            name: "Erhnam Djinn",
            smallImage: "images/card_faces/green/erhnam_djinn_sm.jpg",
            fullImage: "images/card_faces/green/erhnam_djinn_lg.jpg",
            ability: "Deal 4 damage. You take 2 damage.",
            set: "Arabian Nights",
            artist: "Ken Meyer Jr."
        },
        {
            name: "Fog",
            smallImage: "images/card_faces/green/fog_sm.jpg",
            fullImage: "images/card_faces/green/fog_lg.jpg",
            ability: "Prevent all damage dealt by the next match your opponent makes.",
            set: "Core Set 2012",
            artist: "Jaime Jones"
        },
        {
            name: "Giant Growth",
            smallImage: "images/card_faces/green/giant_growth_sm.jpg",
            fullImage: "images/card_faces/green/giant_growth_lg.jpg",
            ability: "Double the damage dealt by your next match.",
            set: "Core Set 10th Edition",
            artist: "Matt Cavotta"
        },
        {
            name: "Llanowar Elves",
            smallImage: "images/card_faces/green/llanowar_elves_sm.jpg",
            fullImage: "images/card_faces/green/llanowar_elves_lg.jpg",
            ability: "Deal 2 damage + your match count.",
            set: "Alpha",
            artist: "Anson Maddocks"
        },
        {
            name: "Rancor",
            smallImage: "images/card_faces/green/rancor_sm.jpg",
            fullImage: "images/card_faces/green/rancor_lg.jpg",
            ability: "Add +3 to all further damage you deal.",
            set: "Urza's Legacy",
            artist: "Kev Walker"
        },
        {
            name: "Sylvan Library",
            smallImage: "images/card_faces/green/sylvan_library_sm.jpg",
            fullImage: "images/card_faces/green/sylvan_library_lg.jpg",
            ability: "Pay 2 life: add +4 to the next damage you deal. This ability stays in effect for the remainder of the game.",
            set: "Legends",
            artist: "Harold McNeill"
        },
        {
            name: "Tarmogoyf",
            smallImage: "images/card_faces/green/tarmogoyf_sm.jpg",
            fullImage: "images/card_faces/green/tarmogoyf_lg.jpg",
            ability: "Deal 2 damage * your match count.",
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
            ability: "Deal 6 damage + your match count. This damage cannot be prevented.",
            set: "From the Vault",
            artist:"Terese Nielsen"
        },
        {
            name: "Blood Moon",
            smallImage: "images/card_faces/red/blood_moon_sm.jpg",
            fullImage: "images/card_faces/red/blood_moon_lg.jpg",
            ability: "Double the next damage you deal.",
            set: "8th Edition",
            artist: "Franz Vohwinkel"
        },
        {
            name: "Goblin King",
            smallImage: "images/card_faces/red/goblin_king_sm.jpg",
            fullImage: "images/card_faces/red/goblin_king_lg.jpg",
            ability: "Deal 2 damage + your match count.",
            set: "7th Edition",
            artist: "Ron Spears"
        },
        {
            name: "Incinerate",
            smallImage: "images/card_faces/red/incinerate_sm.jpg",
            fullImage: "images/card_faces/red/incinerate_lg.jpg",
            ability: "Deal 2 damage * your match count.",
            set: "Mirage",
            artist: "Brian Snoddy"
        },
        {
            name: "Lightning Bolt",
            smallImage: "images/card_faces/red/lightning_bolt_sm.jpg",
            fullImage: "images/card_faces/red/lightning_bolt_lg.jpg",
            ability: "If this is your first match, deal 6 damage. Otherwise, deal 3 damage.",
            set: "Alpha",
            artist: "Christopher Rush"
        },
        {
            name: "Shivan Dragon",
            smallImage: "images/card_faces/red/shivan_dragon_sm.jpg",
            fullImage: "images/card_faces/red/shivan_dragon_lg.jpg",
            ability: "Deal 6 damage.",
            set: "Alpha",
            artist: "Melissa Benson"
        },
        {
            name: "Simian Spirit Guide",
            smallImage: "images/card_faces/red/simian_spirit_guide_sm.jpg",
            fullImage: "images/card_faces/red/simian_spirit_guide_lg.jpg",
            ability: "Deal 2 damage + your match count.",
            set: "Planar Chaos",
            artist: "Dave DeVries"
        },
        {
            name: "Starstorm",
            smallImage: "images/card_faces/red/starstorm_sm.jpg",
            fullImage: "images/card_faces/red/starstorm_lg.jpg",
            ability: "Deal 1 damage + your match count to opponent and to you.",
            set: "Onslaught",
            artist: "David Martin"
        },
        {
            name: "Wheel of Fortune",
            smallImage: "images/card_faces/red/wheel_of_fortune_sm.jpg",
            fullImage: "images/card_faces/red/wheel_of_fortune_lg.jpg",
            ability: "Play a random ability from a match you have already made.",
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
            ability: "If your opponent has more life than you, his life total is now equal to your life total. Otherwise, your life total is equal to his life total.",
            set: "Alpha",
            artist: "Mark Poole"
        },
        {
            name: "Congregate",
            smallImage: "images/card_faces/white/congregate_sm.jpg",
            fullImage: "images/card_faces/white/congregate_lg.jpg",
            ability: "Gain 2 life + your match count.",
            set: "Urza's Saga",
            artist: "Mark Zug"
        },
        {
            name: "Knight of the White Orchid",
            smallImage: "images/card_faces/white/knight_of_the_white_orchid_sm.jpg",
            fullImage: "images/card_faces/white/knight_of_the_white_orchid_lg.jpg",
            ability: "Deal 2 damage + your match count.",
            set: "Shards of Alara",
            artist: "Mark Zug"
        },
        {
            name: "Mesa Pegasus",
            smallImage: "images/card_faces/white/mesa_pegasus_sm.jpg",
            fullImage: "images/card_faces/white/mesa_pegasus_lg.jpg",
            ability: "Deal 1 damage + your match count.",
            set: "Alpha",
            artist: "Melissa Benson"
        },
        {
            name: "Samite Healer",
            smallImage: "images/card_faces/white/samite_healer_sm.jpg",
            fullImage: "images/card_faces/white/samite_healer_lg.jpg",
            ability: "Gain 2 life. Further damage dealt to you is reduced by 1.",
            set: "7th Edition",
            artist: "Anson Maddocks"
        },
        {
            name: "Serra Angel",
            smallImage: "images/card_faces/white/serra_angel_sm.png",
            fullImage: "images/card_faces/white/serra_angel_lg.png",
            ability: "Deal 4 damage + your match count.",
            set: "Alpha",
            artist: "Douglas Schuler"
        },
        {
            name: "Swords to Plowshares",
            smallImage: "images/card_faces/white/swords_to_plowshares_sm.jpg",
            fullImage: "images/card_faces/white/swords_to_plowshares_lg.jpg",
            ability: "Prevent all damage from your opponent's next match.",
            set: "Alpha",
            artist: "Jeff A. Menges"
        },
        {
            name: "Wrath of God",
            smallImage: "images/card_faces/white/wrath_of_god_sm.jpg",
            fullImage: "images/card_faces/white/wrath_of_god_lg.jpg",
            ability: "Prevent all damage from your opponent's next match. All active abilities are removed from the game.",
            set: "Alpha",
            artist: "Quinton Hoover"
        },
        {
            name: "Yosei, the Morning Star",
            smallImage: "images/card_faces/white/yosei_the_morning_star_sm.jpg",
            fullImage: "images/card_faces/white/yosei_the_morning_star_lg.jpeg",
            ability: "Deal 8 damage + your match count.",
            set: "Champions of Kamigawa",
            artist: "Hiro Izawa"
        }
    ];
}

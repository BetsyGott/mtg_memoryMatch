//TODO all the status effects currently don't do anything, fix this

/**
 * Black deck object
 * @constructor
 */
function BlackDeck(parent){
    this.color = "black";
    this.parent = parent;
    this.background = "images/backgrounds/swamp.jpg";
    this.textColor = "#9e9e9e";
    this.glowColor = "#cbc3c1";
    this.deck = [
        {
            name: "Animate Dead",
            smallImage: "images/card_faces/black/animate_dead_sm.jpg",
            fullImage: "images/card_faces/black/animate_dead_lg.jpg",
            ability: "Deal a random amount of damage, up to 3.",
            set: "Alpha",
            artist: "Anson Maddocks",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){
                        var randomDmg = Math.floor(Math.random() * (4));
                        return randomDmg;
                    }).bind(this)
                }
            ]
        },
        {
            name: "Dark Ritual",
            smallImage: "images/card_faces/black/dark_ritual_sm.jpg",
            fullImage: "images/card_faces/black/dark_ritual_lg.jpg",
            ability: "Deal 3 damage.",
            set: "Alpha",
            artist: "Sandra Everingham",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return 3;}).bind(this)
                }
            ]
        },
        {
            name: "Drain Life",
            smallImage: "images/card_faces/black/drain_life_sm.jpg",
            fullImage: "images/card_faces/black/drain_life_lg.jpg",
            ability: "Deal 3 damage + your match count to your opponent. Gain that much life.",
            set: "Alpha",
            artist: "Douglas Schuler",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+3;}).bind(this)
                },
                {
                    type: "lifeGain",
                    target: "self",
                    amount: (function(){return this.parent.getMatchCount()+3;}).bind(this)
                }
            ]
        },
        {
            name: "Hypnotic Specter",
            smallImage: "images/card_faces/black/hypnotic_specter_sm.jpg",
            fullImage: "images/card_faces/black/hypnotic_specter_lg.jpg",
            ability: "Deal 2 damage + your match count to your opponent.",
            set: "Alpha",
            artist: "Douglas Schuler",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+2;}).bind(this)
                }
            ]
        },
        {
            name: "Juzam Djinn",
            smallImage: "images/card_faces/black/juzam_djinn_sm.jpg",
            fullImage: "images/card_faces/black/juzam_djinn_lg.jpg",
            ability: "Deal 4 damage + your match count to your opponent. Take 3 damage.",
            set: "Arabian Nights",
            artist: "Mark Tedin",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+4;}).bind(this)
                },
                {
                    type: "damage",
                    target: "self",
                    amount: function(){return 3;}
                }
            ]

        },
        {
            name: "Lord of the Pit",
            smallImage: "images/card_faces/black/lord_of_the_pit_sm.jpg",
            fullImage: "images/card_faces/black/lord_of_the_pit_lg.jpg",
            ability: "Deal 5 damage + your match count to your opponent. Take a random amount of damage, up to 5.",
            set: "Alpha",
            artist: "Mark Tedin",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+5;}).bind(this)
                },
                {
                    type: "damage",
                    target: "self",
                    amount: (function(){
                        var randomDmg = Math.floor(Math.random() * (6));
                        return randomDmg;
                    }).bind(this)
                }
            ]
        },
        {
            name: "Nantuko Husk",
            smallImage: "images/card_faces/black/nantuko_husk_sm.jpg",
            fullImage: "images/card_faces/black/nantuko_husk_lg.jpg",
            ability: "Deal 2 damage + your match count.",
            set: "Onslaught",
            artist: "Carl Critchlow",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+2;}).bind(this)
                }
            ]
        },
        {
            name: "Nightmare",
            smallImage: "images/card_faces/black/nightmare_sm.jpg",
            fullImage: "images/card_faces/black/nightmare_lg.jpg",
            ability: "Deal 3 damage + your match count.",
            set: "Alpha",
            artist: "Melissa Benson",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+3;}).bind(this)
                }
            ]
        },
        {
            name: "Sengir Vampire",
            smallImage: "images/card_faces/black/sengir_vampire_sm.jpg",
            fullImage: "images/card_faces/black/sengir_vampire_lg.jpg",
            ability: "Deal 4 damage + your match count.",
            set: "Alpha",
            artist: "Anson Maddocks",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+4;}).bind(this)
                }
            ]
        }
    ];
}


/**
 * Blue deck object
 * @constructor
 */
function BlueDeck(parent){
    this.color = "blue";
    this.parent = parent;
    this.background = "images/backgrounds/island.jpg";
    this.textColor = "#5bc0ff";
    this.glowColor = "#00e7ff";
    this.deck = [
        {
            name: "Air Elemental",
            smallImage: "images/card_faces/blue/air_elemental_sm.jpeg",
            fullImage: "images/card_faces/blue/air_elemental_lg.jpg",
            ability: "Deal 4 damage.",
            set: "Alpha",
            artist: "Richard Thomas",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: function(){ return 4;}
                }
            ]
        },
        {
            name: "Braingeyser",
            smallImage: "images/card_faces/blue/braingeyser_sm.jpeg",
            fullImage: "images/card_faces/blue/braingeyser_lg.jpg",
            ability: "Deal a random amount of damage, up to 4. Gain a random amount of life, up to 4.",
            set: "Alpha",
            artist: "Mark Tedin",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){
                        var randomDmg = Math.floor(Math.random() * (5));
                        return randomDmg;
                    }).bind(this)
                },
                {
                    type: "lifeGain",
                    target: "self",
                    amount: (function(){
                        var randomLife = Math.floor(Math.random() * (5));
                        return randomLife;
                    }).bind(this)
                }
            ]
        },
        {
            name: "Force of Will",
            smallImage: "images/card_faces/blue/force_of_will_sm.jpeg",
            fullImage: "images/card_faces/blue/force_of_will_lg.jpg",
            ability: "Gain 3 life.",
            set: "Alliances",
            artist: "Terese Nielsen",
            abilityType: [
                {
                    type: "lifeGain",
                    target: "self",
                    amount: function(){return 3;}
                }
            ]
        },
        {
            name: "Keiga, the Tide Star",
            smallImage: "images/card_faces/blue/keiga_sm.jpeg",
            fullImage: "images/card_faces/blue/keiga_lg.jpg",
            ability: "Deal 5 damage + your match count.",
            set: "Champions of Kamigawa",
            artist: "Ittoku",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+5;}).bind(this)
                }
            ]
        },
        {
            name: "Lord of Atlantis",
            smallImage: "images/card_faces/blue/lord_of_atlantis_sm.jpg",
            fullImage: "images/card_faces/blue/lord_of_atlantis_lg.jpg",
            ability: "Deal 2 damage + your match count.",
            set: "Alpha",
            artist: "Melissa Benson",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+2;}).bind(this)
                }
            ]
        },
        {
            name: "Mana Drain",
            smallImage: "images/card_faces/blue/mana_drain_sm.jpg",
            fullImage: "images/card_faces/blue/mana_drain_lg.jpg",
            ability: "Deal a random amount of damage, up to 4. Gain a random amount of life, up to 4.",
            set: "Legends",
            artist: "Mark Tedin",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){
                        var randomDmg = Math.floor(Math.random() * (5));
                        return randomDmg;
                    }).bind(this)
                },
                {
                    type: "lifeGain",
                    target: "self",
                    amount: (function(){
                        var randomLife = Math.floor(Math.random() * (5));
                        return randomLife;
                    }).bind(this)
                }
            ]
        },
        {
            name: "Polar Kraken",
            smallImage: "images/card_faces/blue/polar_kraken_sm.jpg",
            fullImage: "images/card_faces/blue/polar_kraken_lg.jpg",
            ability: "Deal 10 damage + &frac12; your match count to opponent. You take &frac12; that damage.",
            set: "Ice Age",
            artist: "Mark Tedin",

            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){
                        return (this.parent.getMatchCount()/2)+10;
                    }).bind(this)
                },
                {
                    type: "damage",
                    target: "self",
                    amount: (function(){
                        return ((this.parent.getMatchCount()/2)+10)/2;
                    }).bind(this)
                }
            ]
        },
        //todo fix soulblade djinn's fullsize image
        {
            name: "Soulblade Djinn",
            smallImage: "images/card_faces/blue/soulblade_djinn_sm.jpg",
            fullImage: "images/card_faces/blue/soulblade_djinn_lg.jpg",
            ability: "Deal 3 damage to opponent.",
            set: "Magic Origins",
            artist: "Viktor Titov",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: function(){return 3;}
                }
            ]
        },
        {
            name: "Time Walk",
            smallImage: "images/card_faces/blue/time_walk_sm.jpg",
            fullImage: "images/card_faces/blue/time_walk_lg.jpg",
            ability: "Gain 5 life.",
            set: "Alpha",
            artist: "Amy Weber",
            abilityType: [
                {
                    type: "lifeGain",
                    target: "self",
                    amount: (function(){return 5;}).bind(this)
                }
            ]
        }
    ];
}


/**
 * Green deck object
 * @constructor
 */
function GreenDeck(parent){
    this.color = "green";
    this.parent = parent;
    this.background = "images/backgrounds/forest.jpg";
    this.textColor = "#83d652";
    this.glowColor = "#00c195";
    this.deck = [
        {
            name: "Birds of Paradise",
            smallImage: "images/card_faces/green/birds_of_paradise_sm.jpg",
            fullImage: "images/card_faces/green/birds_of_paradise_lg.jpg",
            ability: "Deal 2 damage.",
            set: "Alpha",
            artist: "Mark Poole",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: function(){return 2;}
                }
            ]
        },
        {
            name: "Craw Wurm",
            smallImage: "images/card_faces/green/craw_wurm_sm.jpg",
            fullImage: "images/card_faces/green/craw_wurm_lg.jpg",
            ability: "Deal 6 damage.",
            set: "8th Edition",
            artist:"Heather Hudson",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: function(){return 6;}
                }
            ]
        },
        {
            name: "Erhnam Djinn",
            smallImage: "images/card_faces/green/erhnam_djinn_sm.jpg",
            fullImage: "images/card_faces/green/erhnam_djinn_lg.jpg",
            ability: "Deal 4 damage. You take 2 damage.",
            set: "Arabian Nights",
            artist: "Ken Meyer Jr.",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount:function(){return 4;}
                },
                {
                    type: "damage",
                    target: "self",
                    amount: function(){return 2;}
                }
            ]
        },
        {
            name: "Fog",
            smallImage: "images/card_faces/green/fog_sm.jpg",
            fullImage: "images/card_faces/green/fog_lg.jpg",
            ability: "Gain life equal to 2 + your match count.",
            set: "Core Set 2012",
            artist: "Jaime Jones",
            abilityType: [
                {
                    type: "lifeGain",
                    target: "self",
                    amount: (function(){return this.parent.getMatchCount()+2;}).bind(this)
                }
            ]
        },
        {
            name: "Giant Growth",
            smallImage: "images/card_faces/green/giant_growth_sm.jpg",
            fullImage: "images/card_faces/green/giant_growth_lg.jpg",
            ability: "Deal 3 damage. Gain 3 life.",
            set: "Core Set 10th Edition",
            artist: "Matt Cavotta",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return 3;}).bind(this)
                },
                {
                    type: "lifeGain",
                    target: "self",
                    amount: (function(){return 3;}).bind(this)
                }
            ]
        },
        {
            name: "Llanowar Elves",
            smallImage: "images/card_faces/green/llanowar_elves_sm.jpg",
            fullImage: "images/card_faces/green/llanowar_elves_lg.jpg",
            ability: "Deal 2 damage + your match count.",
            set: "Alpha",
            artist: "Anson Maddocks",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+2;}).bind(this)
                }
            ]
        },
        {
            name: "Rancor",
            smallImage: "images/card_faces/green/rancor_sm.jpg",
            fullImage: "images/card_faces/green/rancor_lg.jpg",
            ability: "Deal a random amount of damage, up to 4.",
            set: "Urza's Legacy",
            artist: "Kev Walker",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){
                        var randomDmg = Math.floor(Math.random() * (5));
                        return randomDmg;
                    }).bind(this)
                }
            ]
        },
        {
            name: "Sylvan Library",
            smallImage: "images/card_faces/green/sylvan_library_sm.jpg",
            fullImage: "images/card_faces/green/sylvan_library_lg.jpg",
            ability: "Deal 5 damage. Take 2 damage.",
            set: "Legends",
            artist: "Harold McNeill",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return 5;}).bind(this)
                },
                {
                    type: "damage",
                    target: "self",
                    amount: (function(){return 2;}).bind(this)
                }
            ]
        },
        {
            name: "Tarmogoyf",
            smallImage: "images/card_faces/green/tarmogoyf_sm.jpg",
            fullImage: "images/card_faces/green/tarmogoyf_lg.jpg",
            ability: "Deal 2 damage * your match count.",
            set: "Modern Masters",
            artist: "Ryan Barger",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()*2;}).bind(this)
                }
            ]
        }
    ];
}


/**
 * Red deck object
 * @constructor
 */
function RedDeck(parent){
    this.color = "red";
    this.parent = parent;
    this.background = "images/backgrounds/mountain.jpg";
    this.textColor = "#983730";
    this.glowColor = "#ee3d2f";
    this.deck = [
        {
            name: "Akroma, Angel of Fury",
            smallImage: "images/card_faces/red/akroma_angel_of_fury_sm.jpg",
            fullImage: "images/card_faces/red/akroma_angel_of_fury_lg.jpg",
            ability: "Deal 5 damage + your match count.",
            set: "From the Vault",
            artist:"Terese Nielsen",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+5;}).bind(this)
                }
            ]
        },
        {
            name: "Blood Moon",
            smallImage: "images/card_faces/red/blood_moon_sm.jpg",
            fullImage: "images/card_faces/red/blood_moon_lg.jpg",
            ability: "Deal 1 damage + your match count.",
            set: "8th Edition",
            artist: "Franz Vohwinkel",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+1;}).bind(this)
                }
            ]
        },
        {
            name: "Goblin King",
            smallImage: "images/card_faces/red/goblin_king_sm.jpg",
            fullImage: "images/card_faces/red/goblin_king_lg.jpg",
            ability: "Deal 2 damage + your match count.",
            set: "7th Edition",
            artist: "Ron Spears",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+2;}).bind(this)
                }
            ]
        },
        {
            name: "Incinerate",
            smallImage: "images/card_faces/red/incinerate_sm.jpg",
            fullImage: "images/card_faces/red/incinerate_lg.jpg",
            ability: "Deal 2 damage * your match count. Take 3 damage.",
            set: "Mirage",
            artist: "Brian Snoddy",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+2;}).bind(this)
                },
                {
                    type: "damage",
                    target: "self",
                    amount: (function(){return 3;}).bind(this)
                }
            ]
        },
        {
            name: "Lightning Bolt",
            smallImage: "images/card_faces/red/lightning_bolt_sm.jpg",
            fullImage: "images/card_faces/red/lightning_bolt_lg.jpg",
            ability: "If this is your first match, deal 6 damage. Otherwise, deal 3 damage.",
            set: "Alpha",
            artist: "Christopher Rush",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){

                        if ( this.parent.getMatchCount() === 1 ){
                            return 6;
                        } else {
                            return 3;
                        }

                    }).bind(this)
                }
            ]
        },
        {
            name: "Shivan Dragon",
            smallImage: "images/card_faces/red/shivan_dragon_sm.jpg",
            fullImage: "images/card_faces/red/shivan_dragon_lg.jpg",
            ability: "Deal 6 damage.",
            set: "Alpha",
            artist: "Melissa Benson",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: function(){return 6;}
                }
            ]
        },
        {
            name: "Simian Spirit Guide",
            smallImage: "images/card_faces/red/simian_spirit_guide_sm.jpg",
            fullImage: "images/card_faces/red/simian_spirit_guide_lg.jpg",
            ability: "Deal 2 damage + your match count.",
            set: "Planar Chaos",
            artist: "Dave DeVries",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+2;}).bind(this)
                }
            ]
        },
        {
            name: "Starstorm",
            smallImage: "images/card_faces/red/starstorm_sm.jpg",
            fullImage: "images/card_faces/red/starstorm_lg.jpg",
            ability: "Deal 1 damage + your match count to opponent and to you.",
            set: "Onslaught",
            artist: "David Martin",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+1;}).bind(this)
                },
                {
                    type: "damage",
                    target: "self",
                    amount: (function(){return this.parent.getMatchCount()+1;}).bind(this)
                }
            ]
        },
        {
            name: "Wheel of Fortune",
            smallImage: "images/card_faces/red/wheel_of_fortune_sm.jpg",
            fullImage: "images/card_faces/red/wheel_of_fortune_lg.jpg",
            ability: "Deal a random amount of damage, up to 5.",
            set: "Alpha",
            artist: "Daniel Gelon",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){
                        var randomDmg = Math.floor(Math.random() * (6));
                        return randomDmg;
                    }).bind(this)
                }
            ]
        }
    ];
}


/**
 * White deck object
 * @constructor
 */
function WhiteDeck(parent){
    this.color = "white";
    this.parent = parent;
    this.background = "images/backgrounds/plains.jpg";
    this.textColor = "#FFF";
    this.glowColor = "#FFF";
    this.deck = [
        {
            name: "Balance",
            smallImage: "images/card_faces/white/balance_sm.jpg",
            fullImage: "images/card_faces/white/balance_lg.jpg",
            ability: "Gain a random amount of life, up to 5.",
            set: "Alpha",
            artist: "Mark Poole",
            abilityType: [
                {
                    type: "lifeGain",
                    target: "self",
                    amount: (function(){
                        var randomLife = Math.floor(Math.random() * (6));
                        return randomLife;
                    }).bind(this)
                }
            ]
        },
        {
            name: "Congregate",
            smallImage: "images/card_faces/white/congregate_sm.jpg",
            fullImage: "images/card_faces/white/congregate_lg.jpg",
            ability: "Gain 2 life + your match count.",
            set: "Urza's Saga",
            artist: "Mark Zug",
            abilityType: [
                {
                    type: "lifeGain",
                    target: "self",
                    amount: (function(){return this.parent.getMatchCount()+2;}).bind(this)
                }
            ]
        },
        {
            name: "Knight of the White Orchid",
            smallImage: "images/card_faces/white/knight_of_the_white_orchid_sm.jpg",
            fullImage: "images/card_faces/white/knight_of_the_white_orchid_lg.jpg",
            ability: "Deal 2 damage + your match count.",
            set: "Shards of Alara",
            artist: "Mark Zug",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+2;}).bind(this)
                }
            ]
        },
        {
            name: "Mesa Pegasus",
            smallImage: "images/card_faces/white/mesa_pegasus_sm.jpg",
            fullImage: "images/card_faces/white/mesa_pegasus_lg.jpg",
            ability: "Deal 1 damage + your match count.",
            set: "Alpha",
            artist: "Melissa Benson",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+1;}).bind(this)
                }
            ]
        },
        {
            name: "Samite Healer",
            smallImage: "images/card_faces/white/samite_healer_sm.jpg",
            fullImage: "images/card_faces/white/samite_healer_lg.jpg",
            ability: "Gain 3 life.",
            set: "7th Edition",
            artist: "Anson Maddocks",
            abilityType: [
                {
                    type: "lifeGain",
                    target: "self",
                    amount: function(){return 3;}
                }
            ]
        },
        {
            name: "Serra Angel",
            smallImage: "images/card_faces/white/serra_angel_sm.png",
            fullImage: "images/card_faces/white/serra_angel_lg.png",
            ability: "Deal 4 damage + your match count.",
            set: "Alpha",
            artist: "Douglas Schuler",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+4;}).bind(this)
                }
            ]
        },
        {
            name: "Swords to Plowshares",
            smallImage: "images/card_faces/white/swords_to_plowshares_sm.jpg",
            fullImage: "images/card_faces/white/swords_to_plowshares_lg.jpg",
            ability: "Gain 5 life.",
            set: "Alpha",
            artist: "Jeff A. Menges",
            abilityType: [
                {
                    type: "lifeGain",
                    target: "opponent",
                    amount: (function(){return 5;}).bind(this)
                }
            ]
        },
        {
            name: "Wrath of God",
            smallImage: "images/card_faces/white/wrath_of_god_sm.jpg",
            fullImage: "images/card_faces/white/wrath_of_god_lg.jpg",
            ability: "Deal 5 damage. Take 5 damage.",
            set: "Alpha",
            artist: "Quinton Hoover",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return 5;}).bind(this)
                },
                {
                    type: "damage",
                    target: "self",
                    amount: (function(){return 5;}).bind(this)
                }
            ]
        },
        {
            name: "Yosei, the Morning Star",
            smallImage: "images/card_faces/white/yosei_the_morning_star_sm.jpg",
            fullImage: "images/card_faces/white/yosei_the_morning_star_lg.jpeg",
            ability: "Deal 6 damage + your match count.",
            set: "Champions of Kamigawa",
            artist: "Hiro Izawa",
            abilityType: [
                {
                    type: "damage",
                    target: "opponent",
                    amount: (function(){return this.parent.getMatchCount()+6;}).bind(this)
                }
            ]
        }
    ];
}

//main game object, handles game logic
function Game(gameArea) {
    // var self = this;
    this.gameArea = $(gameArea);
    this.firstCard = null;
    this.secondCard = null;
    this.totalMatches = 9;
    this.matchCounter = 0;
    this.canClick = true;
    this.matches = 0;
    this.attempts = 0;
    this.accuracy = 0;
    this.gamesPlayed = 0;
    this.cardArray = [];
    this.cardBack = "images/mtg-card-back.jpg";
    // vvv this will end up 1. being a parameter passed in 2. going into a player object instead
    this.selectedDeck = new BlueDeck(this);
    
    
}

//game object function to push images into imageArray, currently just a copy of what was there before. Will have to change to accommodate different colors instead of the same static images each time
Game.prototype.pushCards = function(){
    //push objects from deck into cardArray
    for(var i =0; i < this.selectedDeck.deck.length; i++){
        this.cardArray.push(this.selectedDeck.deck[i]);
    }
    
    console.log("card array: ", this.cardArray);
};

//performs logic of game
Game.prototype.checkMatch = function(card){

    console.log("card is: ", card);
    
        if(this.canClick){

            card.$element.addClass("flipped");

//          check if firstCard is null
            if(!this.firstCard){

                this.firstCard = card;

            } else {
                
                this.secondCard = card;

                // check for match
                if(this.firstCard.$element.find(".front > img").attr("src") === this.secondCard.$element.find(".front > img").attr("src")){
                    //if a match
                    
                    this.matchCounter++;
                    this.matches++;
                    this.attempts++;

//            reset firstCard and secondCard & wait for next card click
                    this.firstCard = this.secondCard = null;
                    
                    if(this.matchCounter === this.totalMatches){

                        // if all matches found, you won the game
                        alert('you won!');
                        //this.canClick = false;

                    }
                } else{
                    
                    // not a match

                    this.canClick = false;

                    setTimeout( (function() {
                        
                        $(this.firstCard.$element).add(this.secondCard.$element).removeClass("flipped");
                        this.firstCard = this.secondCard = null;
                        this.canClick = true;
                        
//                  note: bind needed here to tell func inside set timeout what 'this' is
                    }.bind(this)), 1700);
                    
                    this.misses++;
                    this.attempts++;
                }
            }
        }

        this.displayStats();

};

Game.prototype.displayStats = function(){

    $(".games-played .value").html(this.gamesPlayed);
    $(".matches .value").html(this.matches);
    $(".attempts .value").html(this.attempts);
    $(".misses .value").html(this.misses);

    // if attempts = 0 then accuracy = 0% to avoid divide by zero
    if(this.attempts === 0){
        this.accuracy = "0%";
        $(".accuracy .value").html(this.accuracy);
    } else{
        //format accuracy
        this.accuracy = Math.floor((this.matches / this.attempts)*100);
        $(".accuracy .value").html(this.accuracy + "%");
    }
};

Game.prototype.init = function(){
    this.resetStats();
    this.createRandomCards(this.cardArray);
};

Game.prototype.createRandomCards = function(array){

    //push card objects into array 2x for 18 total
    this.pushCards();
    this.pushCards();

    //instantiate a new card constructor with a random card object attached to it
    for(var i = 0; i < 18; i++){
        var j = Math.floor(Math.random() * array.length-1)+1;
        var card = new Card(this, array[j]);
        this.gameArea.append( card.createSelf(array[j].smallImage, this.cardBack) );
        array.splice(j,1);
    }

};

Game.prototype.resetAll = function(){
    this.canClick = false;
    this.gamesPlayed++;
    this.resetStats();
    this.displayStats();

    this.gameArea.html("");
    this.createRandomCards(this.cardArray);
    this.canClick = true;
    
};

Game.prototype.resetStats = function(){
    this.accuracy = 0;
    this.matches = 0;
    this.attempts = 0;
    this.misses = 0;
    this.matchCounter = 0;

    this.displayStats();
};

/**
 * Card prototype constructor
 * @param parent
 * @constructor
 */
function Card(parent, infoObject) {
    this.parent = parent;
    this.infoObject = infoObject;
    this.$element = null;
    this.$front = null;
    this.$back = null;
    this.$frontImage = null;
    this.$backImage = null;
    // this.back = "../images/mtg-card-back.jpg";
}

//this function will create one card
//first randomize the array of front image srcs, then do a loop and run through this function for each src in the arr

Card.prototype.createSelf = function(frontImage, backImage){
    //create the element that will represent the object on the dom
    this.$element = $("<div>",{
        class: 'card'
    });

    this.$front = $("<div>",{
        class: 'front'
    });

    this.$back = $("<div>",{
        class: 'back'
    });

    this.$frontImage = $("<img>", {
       src: frontImage
    });

    this.$backImage = $("<img>", {
        src: backImage
    });

    this.$element.append(this.$front, this.$back);
    this.$front.append(this.$frontImage);
    this.$back.append(this.$backImage);

    this.$element.on('click', this.handleClick.bind(this));

    return this.$element;
};

Card.prototype.handleClick = function(){
    //parent.checkMatch($(this));
    this.parent.checkMatch(this).bind(this);
};

/**
 * testing a constructor for the blue deck
 * @constructor
 */
function BlueDeck(parent){
    this.parent = parent;
    this.deck = [
        {
            name: "Air Elemental",
            smallImage: "images/card_faces/blue/air_elemental_sm.jpeg",
            fullImage: "images/card_faces/blue/air_elemental_lg.jpg",
            ability: "Air elemental ability tbd"
        },
        {
            name: "Brainstorm",
            smallImage: "images/card_faces/blue/brainstorm_sm.jpeg",
            fullImage: "images/card_faces/blue/brainstorm_lg.jpg",
            ability: "Brainstorm ability tbd"
        },
        {
            name: "Force of Will",
            smallImage: "images/card_faces/blue/force_of_will_sm.jpeg",
            fullImage: "images/card_faces/blue/force_of_will_lg.jpg",
            ability: "Force of Will ability tbd"
        },
        {
            name: "Keiga, the Tide Star",
            smallImage: "images/card_faces/blue/keiga_sm.jpeg",
            fullImage: "images/card_faces/blue/keiga_lg.jpg",
            ability: "keiga ability tbd"
        },
        {
            name: "Lord of Atlantis",
            smallImage: "images/card_faces/blue/lord_of_atlantis_sm.jpg",
            fullImage: "images/card_faces/blue/lord_of_atlantis_lg.jpg",
            ability: "lord of atlantis ability tbd"
        },
        {
            name: "Mana Drain",
            smallImage: "images/card_faces/blue/mana_drain_sm.jpg",
            fullImage: "images/card_faces/blue/mana_drain_lg.jpg",
            ability: "mana drain ability tbd"
        },
        {
            name: "Polar Kraken",
            smallImage: "images/card_faces/blue/polar_kraken_sm.jpg",
            fullImage: "images/card_faces/blue/polar_kraken_lg.jpg",
            ability: "polar kraken ability tbd"
        },
        {
            name: "Soulblade Djinn",
            smallImage: "images/card_faces/blue/soulblade_djinn_sm.jpg",
            fullImage: "images/card_faces/blue/soulblade_djinn_lg.jpg",
            ability: "soulblade djinn ability tbd"
        },
        {
            name: "Time Walk",
            smallImage: "images/card_faces/blue/time_walk_sm.jpg",
            fullImage: "images/card_faces/blue/time_walk_lg.jpg",
            ability: "time walk ability tbd"
        }
    ];
}

$(document).ready(function(){

        // var $card = $(".card"),
        var game = new Game($("#game-area"));
    
    game.init();

    //perform game logic when cards are clicked
    // $card.on("click", function(){
    //     game.checkMatch($(this));
    // });
    
    //resets game on click, randomizes cards, increments game counter
    $("#reset-button").on("click", function(){

        game.resetAll();

    });

});


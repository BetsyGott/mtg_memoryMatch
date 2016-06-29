//handles logic of each player's games
function Game(gameArea, playerStatsDiv, playerAbilityContainer, parent) {
    this.parent = parent;
    this.gameArea = $(gameArea);
    this.playerStatsDiv = $(playerStatsDiv);
    this.playerAbilityContainer = $(playerAbilityContainer);
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
    this.selectedDeck = parent.deck;

}

Game.prototype.pushCards = function(){
    //push objects from deck into cardArray
    for(var i =0; i < this.selectedDeck.deck.length; i++){
        this.cardArray.push(this.selectedDeck.deck[i]);
    }
};

//performs logic of game
Game.prototype.checkMatch = function(card){

    if(this.canClick){

        card.addFlippedClass();

//          check if firstCard is null
        if(!this.firstCard){

            this.firstCard = card;

        } else {

            this.secondCard = card;

            // check for match
            if(this.firstCard.getCardFace() === this.secondCard.getCardFace()){

                //if a match

                this.matchCounter++;
                this.matches++;
                this.attempts++;

                //move match counter to somewhere inside this function vvv to avoid win screen happening before last ability is played
                
                setTimeout( (function() {

                    $(this.playerAbilityContainer).find(".ability-card-title").html(card.infoObject.name);
                    $(this.playerAbilityContainer).find(".ability-card-img").css({
                        background: 'url('+card.infoObject.fullImage+') no-repeat center center',
                        backgroundSize: 'cover'
                    });
                    $(this.playerAbilityContainer).find("#set-name").html(card.infoObject.set);
                    $(this.playerAbilityContainer).find("#artist-name").html(card.infoObject.artist);
                    $(this.playerAbilityContainer).find(".ability-text").html("<p>"+card.infoObject.ability+"</p>");

                    $(this.playerAbilityContainer).show();
                    $(".overlay").fadeIn("fast");


                    setTimeout( (function(){
                        $(this.playerAbilityContainer).css("opacity", 1);
                    }).bind(this), 900);

                    //placeholder for hiding ability div again
                    $(this.playerAbilityContainer).on("click", function(){


                        $(this.playerAbilityContainer).css("opacity", 0);
                        $(".overlay").hide(400);
                        $(this.playerAbilityContainer).hide(400);
                    });

                }.bind(this)), 1500);

//            reset firstCard and secondCard & wait for next card click
                this.firstCard = this.secondCard = null;

                if(this.matchCounter === this.totalMatches){
                
                
                    alert('you won!');
                    this.canClick = false;
                
                }
                
            } else{
                // not a match

                this.canClick = false;

                setTimeout( (function() {

                    this.firstCard.removeFlippedClass();
                    this.secondCard.removeFlippedClass();

                    this.firstCard = this.secondCard = null;
                    this.canClick = true;

//                  note: bind needed here to tell func inside set timeout what 'this' is
                }.bind(this)), 1700);

                this.misses++;
                this.attempts++;
                
            }

            this.displayStats(this.playerStatsDiv);
            
        }
    }

    // this.displayStats();

};

Game.prototype.displayStats = function(playerStatsDiv){

    $(".games-played .value").html(this.gamesPlayed);
    $(playerStatsDiv).find(".matches .value").html(this.matches);
    $(playerStatsDiv).find(".attempts .value").html(this.attempts);
    $(playerStatsDiv).find(".misses .value").html(this.misses);
    $(playerStatsDiv).find(".accuracy .value").html(this.formatAccuracy() + "%");

};

Game.prototype.init = function(){
    this.resetStats();
    this.buildBoard();
};

Game.prototype.buildBoard = function(){

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

Game.prototype.formatAccuracy = function(){
    if(this.attempts === 0){
        this.accuracy = "0";
    } else{
        //format accuracy
        this.accuracy = Math.floor((this.matches / this.attempts)*100);
    }

    return this.accuracy;
};

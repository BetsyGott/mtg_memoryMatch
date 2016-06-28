//main game object, handles game logic
function Game(gameArea, deck) {
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
    this.selectedDeck = new deck(this);

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

                console.log("infoObject is ", card.infoObject);

                this.matchCounter++;
                this.matches++;
                this.attempts++;

                // placeholder for actual effects on match, right now just shows a default ability card and the smoke bg after a timer
                
                //move match counter to somewhere inside this function vvv to avoid win screen happening before last ability is played
                
                setTimeout( (function() {

                    $(".ability-card-title").html(card.infoObject.name);
                    $(".ability-card-img").css({
                        background: 'url('+card.infoObject.fullImage+') no-repeat center center',
                        backgroundSize: 'cover'
                    });
                    $("#set-name").html(card.infoObject.set);
                    $("#artist-name").html(card.infoObject.artist);
                    $(".ability-text").html("<p>"+card.infoObject.ability+"</p>");

                    $("#abilityContainer").show();
                    $(".overlay").fadeIn("fast");


                    setTimeout( function(){
                        $("#abilityContainer").css("opacity", 1);
                    }, 900);

                    //placeholder for hiding ability div again
                    $("#abilityContainer").on("click", function(){


                        $("#abilityContainer").css("opacity", 0);
                        $(".overlay").hide(400);
                        $("#abilityContainer").hide(400);
                    });

                }.bind(this)), 1500);

//            reset firstCard and secondCard & wait for next card click
                this.firstCard = this.secondCard = null;

                if(this.matchCounter === this.totalMatches){

                    // if all matches found, you won the game
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
    this.buildBoard();
};

Game.prototype.buildBoard = function(){

    //background based on deck choice
    $(".main").css({
        background: "url('"+ this.selectedDeck.background +"') no-repeat center fixed",
        backgroundSize: 'cover'
    });

    $(".player1-stats").find(".deck-text").css({
       color: this.selectedDeck.textColor
    });

    //create cards
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

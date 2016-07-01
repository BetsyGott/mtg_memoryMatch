//handles logic of each player's games
function Game(gameArea, playerStatsDiv, playerAbilityContainer, parent) {
    this.parent = parent;
    this.gameArea = $(gameArea);
    this.playerStatsDiv = $(playerStatsDiv);
    this.playerAbilityContainer = $(playerAbilityContainer);
    this.firstCard = null;
    this.secondCard = null;
    this.totalMatches = 9;
    this.canClick = true;
    this.matches = 0;
    this.attempts = 0;
    this.accuracy = 0;
    this.wins = 0;
    this.losses = 0;
    this.gamesPlayed = 0;
    this.cardArray = [];
    this.cardBack = "images/mtg-card-back.jpg";
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

                this.incrementCounter(this.matches);
                this.incrementCounter(this.attempts);

//move match counter to somewhere inside this function vvv to avoid win screen happening before last ability is played
                
                //this function shows the ability card of the activated match
                setTimeout( (function() {
                    
                    this.changeChildElemHtml(this.playerAbilityContainer, ".ability-card-title", card.infoObject.name);
                    
                    $(this.playerAbilityContainer).find(".ability-card-img").css({
                        background: 'url('+card.infoObject.fullImage+') no-repeat center center',
                        backgroundSize: 'cover'
                    });

                    this.changeChildElemHtml(this.playerAbilityContainer, ".set-name", card.infoObject.set);
                    this.changeChildElemHtml(this.playerAbilityContainer, ".artist-name", card.infoObject.artist);
                    this.changeChildElemHtml(this.playerAbilityContainer, ".ability-text", "<p>"+card.infoObject.ability+"</p>");

                    $(this.playerAbilityContainer).show();
                    $(".overlay").fadeIn("fast");


                    setTimeout( (function(){
                        this.changeElementOpacity(this.playerAbilityContainer, 1);
                    }).bind(this), 900);

                    //placeholder for hiding ability div again
                    $(this.playerAbilityContainer).on("click", (function(){
                        
                        this.changeElementOpacity(this.playerAbilityContainer, 0);
                        this.hideElement($(".overlay"), 400);
                        this.hideElement(this.playerAbilityContainer, 400);

//                      handle card effects after the ability div has been shown and hidden again
                        this.handleCardEffects(this.secondCard.infoObject);

//                      reset firstCard and secondCard & wait for next card click
                        this.firstCard = this.secondCard = null;
                        $(this.playerAbilityContainer).off("click");

                        //win condition for hitting all matches
                        if(this.matches === this.totalMatches){

                            this.handleWin();

                        }
                        
                    }).bind(this));

                }.bind(this)), 1500);
                
            } else{
                // not a match

                this.canClick = false;

                setTimeout( (function() {

                    this.firstCard.removeFlippedClass();
                    this.secondCard.removeFlippedClass();

                    this.firstCard = this.secondCard = null;
                    this.canClick = true;

                    setTimeout( (function() {
                        
                        //turn is passed to next player after a pause
                        this.handleTurnEnd();
//                  
                    }.bind(this)), 1500);

//                  note: bind needed here to tell func inside set timeout what 'this' is
                }.bind(this)), 1700);

                this.incrementCounter(this.misses);
                this.incrementCounter(this.attempts);

            }

            this.displayStats(this.playerStatsDiv);
            
        }
    }

};

Game.prototype.handleCardEffects = function(obj){

    //loop through effects in abilityType array on the card
    for(var effect in obj.abilityType){
        
        if(obj.abilityType[effect].type === "damage"){
            this.handleDamage(obj.abilityType[effect].target, obj.abilityType[effect].amount);
        } else {
            this.handleLifeGain(obj.abilityType[effect].target, obj.abilityType[effect].amount);
        }
    }
};

Game.prototype.getMatchCount = function(){
  return this.matches;
};

Game.prototype.handleTurnEnd = function(){
    this.parent.handleTurnEnd();
};

Game.prototype.handleWin = function(){
  this.parent.handleWin();  
};

Game.prototype.handleDamage = function(target, amount){
    this.parent.handleDamage(target, amount);
};

Game.prototype.handleLifeGain = function(target, amount){
    this.parent.handleLifeGain(target, amount);
};

Game.prototype.displayStats = function(playerStatsDiv){

    $(".games-played .value").html(this.gamesPlayed);
    this.changeChildElemHtml(playerStatsDiv, ".matches .value", this.matches);
    this.changeChildElemHtml(playerStatsDiv, ".attempts .value", this.attempts);
    this.changeChildElemHtml(playerStatsDiv, ".misses .value", this.misses);
    this.changeChildElemHtml(playerStatsDiv, ".accuracy .value", this.formatAccuracy() + "%");
    this.changeChildElemText(playerStatsDiv, ".life-total", this.parent.getLifeTotal());

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
    this.incrementCounter(this.gamesPlayed);
    this.resetStats();
    this.displayStats();

    this.gameArea.html("");
    this.createRandomCards(this.cardArray);
    this.canClick = true;
    
};

Game.prototype.resetStats = function(){
    
    this.accuracy = this.matches = this.attempts = this.misses = 0;
    this.parent.setLifeTotal(20);

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

Game.prototype.incrementWin = function(){
  this.wins++;  
};

Game.prototype.incrementLoss = function(){
  this.losses++;  
};

Game.prototype.changeElementOpacity = function(element, opacityNum){
    $(element).css("opacity", opacityNum);
    
    return element;
};

Game.prototype.hideElement = function(element, duration){
    
    $(element).hide(duration);
   
    return element;
};

Game.prototype.changeChildElemHtml = function(parentEl, childEl, newInfo){
    $(parentEl).find(childEl).html(newInfo);
    
    return newInfo;
};

Game.prototype.changeChildElemText = function(parentEl, childEl, newInfo){
    $(parentEl).find(childEl).text(newInfo);
    
    return newInfo;
};

Game.prototype.incrementCounter = function(counter){
    counter++;
    
    return counter;
};

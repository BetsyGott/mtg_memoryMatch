//main game object, handles game logic
function Game() {
    // var self = this;
    this.firstCard = null;
    this.secondCard = null;
    this.totalMatches = 9;
    this.matchCounter = 0;
    this.canClick = true;
    this.matches = 0;
    this.attempts = 0;
    this.accuracy = 0;
    this.gamesPlayed = 0;
    this.imageArray = [];
    
}

//game object function to push images into imageArray, currently just a copy of what was there before. Will have to change to accommodate different colors instead of the same static images each time
Game.prototype.pushImages = function(){
    this.imageArray.push('<img src="images/card_faces/blue/air_elemental_sm.jpeg"/>');
    this.imageArray.push('<img src="images/card_faces/blue/brainstorm_sm.jpeg"/>');
    this.imageArray.push('<img src="images/card_faces/blue/force_of_will_sm.jpeg"/>');
    this.imageArray.push('<img src="images/card_faces/blue/keiga_sm.jpeg"/>');
    this.imageArray.push('<img src="images/card_faces/blue/lord_of_atlantis_sm.jpg"/>');
    this.imageArray.push('<img src="images/card_faces/blue/mana_drain_sm.jpg"/>');
    this.imageArray.push('<img src="images/card_faces/blue/polar_kraken_sm.jpg"/>');
    this.imageArray.push('<img src="images/card_faces/blue/soulblade_djinn_sm.jpg">');
    this.imageArray.push('<img src="images/card_faces/blue/time_walk_sm.jpg"/>');
};

//push images into array 2x, then randomize them and insert them into DOM elements, then delete them from the array as you go
Game.prototype.randomizeImages = function(array){
    this.pushImages();
    this.pushImages();

    $(".card").each(function(){
        var i = Math.floor(Math.random() * array.length-1)+1;

        $(this).find(".front").html( array[i] );

        array.splice(i, 1);

    });
};

Game.prototype.resetStats = function(){
    this.accuracy = 0;
    this.matches = 0;
    this.attempts = 0;
    this.misses = 0;
    this.matchCounter = 0;

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

//performs logic of game
Game.prototype.cardClicked = function(card){
    
        if(this.canClick){

            card.addClass("flipped");

//          check if firstCard is null
            if(!this.firstCard){

                this.firstCard = card;

            } else {
                
                this.secondCard = card;

                // check for match
                if(this.firstCard.find(".front > img").attr("src") === this.secondCard.find(".front > img").attr("src")){
                    //if a match
                    
                    this.matchCounter++;
                    this.matches++;
                    this.attempts++;

//            reset firstCard and secondCard & wait for next card click
                    this.firstCard = this.secondCard = null;
                    
                    if(this.matchCounter === this.totalMatches){

                        // if all matches found, you won the game
                        alert('you won!');

                    }
                } else{
                    
                    // not a match

                    this.canClick = false;

                    setTimeout( (function() {
                        
                        $(this.firstCard).add(this.secondCard).removeClass("flipped");

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

Game.prototype.resetAll = function(){
    this.canClick = false;
    this.gamesPlayed++;
    this.resetStats();
    this.displayStats();

    if($(".card").hasClass("flipped")){
        $(".card").removeClass("flipped");
    }

    // timeout on randomize images so you can't see images for split second before flipped back
    setTimeout((function(){

        this.randomizeImages(this.imageArray);
        this.canClick = true;

    }.bind(this)) , 1000);
};

Game.prototype.init = function(){
    this.resetStats();
    this.randomizeImages(this.imageArray);
};


$(document).ready(function(){
        var $card = $(".card"),
        $front = $(".front"),
        $back = $(".back"), 
        game = new Game;

    
    game.init();

    //perform game logic when cards are clicked
    $card.on("click", function(){
        game.cardClicked($(this));
    });
    
    //resets game on click, randomizes cards, increments game counter
    $("#reset-button").on("click", function(){

        game.resetAll();

    });

});


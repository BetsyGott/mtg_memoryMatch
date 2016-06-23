//main game object, handles game logic
function Game() {
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

//game object function to push images into imageArray, currently just a copy of what was there before. Will have to change to accomodate different colors instead of the same static images each time
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

        //check canClick is true, rest of code only executes if true
        if(this.canClick){

            // on click, flip card
            card.addClass("flipped");

//          check if firstCard is null
            if(!this.firstCard){

//              if null, make firstCard = this, then done
                this.firstCard = card;

            } else {

                // if !null, set secondCard = this
                this.secondCard = card;

                // check if firstCard === secondCard (by checking whether the .front <img> matches
                if(this.firstCard.find(".front > img").attr("src") === this.secondCard.find(".front > img").attr("src")){

                    // if true, increase match counter and matches stat
                    this.matchCounter++;
                    this.matches++;
//              increment attempts counter
                    this.attempts++;

//            reset firstCard and secondCard & wait for next card click
                    this.firstCard = this.secondCard = null;

                    // check if matchCounter === totalMatches
                    if(this.matchCounter === this.totalMatches){

                        // if true, Display Win Message
                        alert('you won!');

                    }
                } else{
                    // if false (firstCard !== secondCard)
                    // set canClick to false to prevent user interaction during timeout

                    this.canClick = false;

                    // wait 1.7s then flip back both elements

                    setTimeout( function() {
                        $(this.firstCard).add(this.secondCard).removeClass("flipped");
//                 reset firstCard & secondCard
                        this.firstCard = this.secondCard = null;
//                  reset canClick to true again
                        this.canClick = true;

                    }, 1700);

//                  after flip back, increment misses stat by 1
                    this.misses++;
//              increment attempts counter
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
    setTimeout(function(){

        this.randomizeImages(this.imageArray);
        this.canClick = true;

    } , 1000)
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
    $card.on("click", game.cardClicked($(this)));
    
    //resets game on click, randomizes cards, increments game counter
    $("#reset-button").click(function(){

        game.resetAll();

    });

});


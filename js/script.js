//main game object, handles game logic
function Game() {
    var gameScope = this;
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
    imageArray.push('<img src="images/card_faces/blue/air_elemental_sm.jpeg"/>');
    imageArray.push('<img src="images/card_faces/blue/brainstorm_sm.jpeg"/>');
    imageArray.push('<img src="images/card_faces/blue/force_of_will_sm.jpeg"/>');
    imageArray.push('<img src="images/card_faces/blue/keiga_sm.jpeg"/>');
    imageArray.push('<img src="images/card_faces/blue/lord_of_atlantis_sm.jpg"/>');
    imageArray.push('<img src="images/card_faces/blue/mana_drain_sm.jpg"/>');
    imageArray.push('<img src="images/card_faces/blue/polar_kraken_sm.jpg"/>');
    imageArray.push('<img src="images/card_faces/blue/soulblade_djinn_sm.jpg">');
    imageArray.push('<img src="images/card_faces/blue/time_walk_sm.jpg"/>');
};

//push images into array 2x, then randomize them and insert them into DOM elements, then delete them from the array as you go
Game.prototype.randomizeImages = function(){
    this.pushImages();
    this.pushImages();

    $(".card").each(function(){
        var i = Math.floor(Math.random()*gameScope.imageArray.length-1)+1;

        $(this).find(".front").html(gameScope.imageArray[i]);

        gameScope.imageArray.splice(i, 1);

    });
};


$(document).ready(function(){
        var $card = $(".card"),
        $front = $(".front"),
        $back = $(".back"), 
        game = new Game;

    
    game.randomizeImages();

    //perform game logic when cards are clicked
    $card.on("click", cardClicked);

    // displays the stats on the left hand side
    function displayStats(){

        $(".games-played .value").html(gamesPlayed);

        $(".matches .value").html(game.matches);

        $(".attempts .value").html(game.attempts);

        $(".misses .value").html(game.misses);

        // if attempts = 0 then accuracy = 0% to avoid divide by zero
        if(game.attempts === 0){
            game.accuracy = "0%";
            $(".accuracy .value").html(game.accuracy);
        } else{
            //format accuracy
            game.accuracy = Math.floor((game.matches / game.attempts)*100);
            $(".accuracy .value").html(game.accuracy + "%");
        }

    }
    //resets stats
    function resetStats(){
        game.accuracy = 0;
        game.matches = 0;
        game.attempts = 0;
        game.misses = 0;

        displayStats();
    }

    //performs logic of game
    function cardClicked(){

        //check canClick is true, rest of code only executes if true

        if(canClick){

            // on click, flip card
            $(this).addClass("flipped");

//          check if firstCard is null
            if(!firstCard){

//              if null, make firstCard = this, then done
                firstCard = $(this);

            } else {

                // if !null, set secondCard = this
                secondCard = $(this);

                // check if firstCard === secondCard (by checking whether the .front <img> matches
                if(firstCard.find(".front > img").attr("src") === secondCard.find(".front > img").attr("src")){

                    // if true, increase match counter and matches stat
                    matchCounter++;
                    matches++;
//              increment attempts counter
                    attempts++;
                    
//            reset firstCard and secondCard & wait for next card click
                    firstCard = secondCard = null;

                    // check if matchCounter === totalMatches
                    if(matchCounter === totalMatches){

                        // if true, Display Win Message
                        alert('you won!');

                    }
                } else{
                    // if false (firstCard !== secondCard)
                    // set canClick to false to prevent user interaction during timeout

                    canClick = false;

                    // wait 1.7s then flip back both elements

                    setTimeout( function() {
                        $(firstCard).add(secondCard).removeClass("flipped");
//                 reset firstCard & secondCard
                        firstCard = secondCard = null;
//                  reset canClick to true again
                        canClick = true;

                    }, 1700);

//                  after flip back, increment misses stat by 1
                    misses++;
//              increment attempts counter
                    attempts++;
                }
            }
        }

        displayStats();
    }
    
    //resets game on click, randomizes cards, increments game counter
    $("#reset-button").click(function(){

        canClick = false;
        gamesPlayed++;
        resetStats();
        displayStats();

        if($(".card").hasClass("flipped")){
            $(".card").removeClass("flipped");
        }

        // timeout on randomize images so you can't see images for split second before flipped back
        setTimeout(function(){

            randomizeImages();
            canClick = true;

        } , 1000)

    });

});


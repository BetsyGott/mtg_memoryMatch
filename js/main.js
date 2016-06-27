
$(document).ready(function(){

    var deckChoice;

    // $(".overlay").show();
    // var deckChoice = prompt("pick red, blue, black, green, or white");

    // $(".overlay").hide();
    $("#abilityContainer").hide();

    $(".mana-symbol").on("click", function(){

        $(".overlay").css("opacity",0.8);
        $(".overlay").hide();

        deckChoice = $(this).attr("data-deck");

        console.log("deckChoice", deckChoice);

        $(".deck-choice").hide();


        if(deckChoice === "red"){
            var game = new Game($("#game-area"), RedDeck);

            game.init();

        } else if(deckChoice === "blue"){
            var game = new Game($("#game-area"), BlueDeck);

            game.init();

        } else if(deckChoice === "white"){
            var game = new Game($("#game-area"), WhiteDeck);

            game.init();

        } else if(deckChoice === "black"){
            var game = new Game($("#game-area"), BlackDeck);

            game.init();

        } else {
            var game = new Game($("#game-area"), GreenDeck);

            game.init();

        }

    });
    
    //resets game on click, randomizes cards, increments game counter
    $("#reset-button").on("click", function(){

        game.resetAll();

    });

});

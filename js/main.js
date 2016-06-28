
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
            $("#abilityContainer").css({
               background: 'url("images/blanks/red_blank.png")no-repeat center center',
               backgroundSize: 'cover',
               boxShadow: '0 0 41px 6px #ee3d2f'
            });

            game.init();

        } else if(deckChoice === "blue"){
            var game = new Game($("#game-area"), BlueDeck);
            $("#abilityContainer").css({
                background: 'url("images/blanks/blue_blank.png")no-repeat center center',
                backgroundSize: 'cover',
                boxShadow: '0 0 41px 6px #00e7ff'
            });

            $(".ability-divider").css({
                top: '63%'
            });

            game.init();

        } else if(deckChoice === "white"){
            var game = new Game($("#game-area"), WhiteDeck);
            $("#abilityContainer").css({
                background: 'url("images/blanks/white_blank.png")no-repeat center center',
                backgroundSize: 'cover',
                boxShadow: '0 0 41px 6px #FFF'
            });

            game.init();

        } else if(deckChoice === "black"){
            var game = new Game($("#game-area"), BlackDeck);
            $("#abilityContainer").css({
                background: 'url("images/blanks/black_blank.png")no-repeat center center',
                backgroundSize: 'cover',
                boxShadow: '0 0 41px 6px #cbc3c1'
            });

            game.init();

        } else {
            var game = new Game($("#game-area"), GreenDeck);
            $("#abilityContainer").css({
                background: 'url("images/blanks/green_blank.png")no-repeat center center',
                backgroundSize: 'cover',
                boxShadow: '0 0 41px 6px #00c195'
            });

            game.init();

        }

    });
    
    //resets game on click, randomizes cards, increments game counter
    $("#reset-button").on("click", function(){

        game.resetAll();

    });

});


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
        var deckColors = {
            'red': '#ee3d2f',
            'blue': '#00e7ff',
            'black': '#cbc3c1',
            'green': '#00c195',
            'white': '#fff'
        };

        $(".deck-choice").hide();
        var capName = deckChoice[0].toUpperCase() + deckChoice.substring(1);
        var deckName = capName + 'Deck';
        var game = new Game($("#game-area"), window[deckName]);
        
        $("#abilityContainer").css({
            background: 'url("images/blanks/'+deckChoice+'_blank.png")no-repeat center center',
            backgroundSize: 'cover',
            boxShadow: '0 0 41px 6px '+deckColors[deckChoice]
        });

        game.init();

    });
    
    //resets game on click, randomizes cards, increments game counter
    $("#reset-button").on("click", function(){

        game.resetAll();

    });

});


$(document).ready(function(){

    var newMultiplayerGame = new Multiplayer();

    $("#p1-game-area").hide();
    $("#p2-game-area").hide();

    $("#abilityContainer").hide();

    $(".mana-symbol").on("click", function(){

        // $(".overlay").css("opacity",0.8);
        // $(".overlay").hide();
        
        var playerName = $("#playerName").val();

        var deckChoice = $(this).attr("data-deck");

        //$(".deck-choice").hide();
        
        var capName = deckChoice[0].toUpperCase() + deckChoice.substring(1) + 'Deck';
        
        newMultiplayerGame.choosePlayers(playerName, window[capName]);
        
    });
    
    //resets game on click, randomizes cards, increments game counter
    $("#reset-button").on("click", function(){

        game.resetAll();

    });

});

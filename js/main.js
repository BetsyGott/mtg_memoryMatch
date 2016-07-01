
$(document).ready(function(){

    var newMultiplayerGame = new Multiplayer();

    //TODO re-enable after testing
    newMultiplayerGame.hideFields();
    newMultiplayerGame.hideOverlay();
     //newMultiplayerGame.showIntroScreen();

    newMultiplayerGame.quickStart("Player 1", BlackDeck, "Player 2", BlueDeck);

    $(".mana-symbol").on("click", function(){
       
        var playerName = $("#playerName").val();
    
        var deckChoice = $(this).attr("data-deck");
       
        var capName = deckChoice[0].toUpperCase() + deckChoice.substring(1) + 'Deck';
       
        newMultiplayerGame.choosePlayers(playerName, window[capName]);
       
    });

});

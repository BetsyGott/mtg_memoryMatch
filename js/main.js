
$(document).ready(function(){

    var newMultiplayerGame = new Multiplayer();

    //TODO re-enable after testing
    newMultiplayerGame.hideFields();
    newMultiplayerGame.hideOverlay();
    
     //newMultiplayerGame.showIntroScreen();

    newMultiplayerGame.quickStart("Bob Player 1", BlackDeck, "Nancy Player 2", BlueDeck);

    //todo move to some init function in mp
    newMultiplayerGame.hideResetButton();

    $(".mana-symbol").on("click", function(){
       
        var playerName = $("#playerName").val();
    
        var deckChoice = $(this).attr("data-deck");
       
        var capName = deckChoice[0].toUpperCase() + deckChoice.substring(1) + 'Deck';
       
        newMultiplayerGame.choosePlayers(playerName, window[capName]);
       
    });

});

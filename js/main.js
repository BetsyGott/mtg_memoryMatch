//TODO re-enable original intro screen
$(document).ready(function(){

    var newMultiplayerGame = new Multiplayer();

    //TODO re-enable after testing
    newMultiplayerGame.hideFields();
    newMultiplayerGame.hideOverlay();
    
     //newMultiplayerGame.showIntroScreen();

    newMultiplayerGame.quickStart("Player 1", BlackDeck, "Player 2", BlueDeck);

    //TODO get rid of this after testing
    newMultiplayerGame.hideWinScreen();

});

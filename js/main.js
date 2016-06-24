
$(document).ready(function(){

    var deckChoice = prompt("pick red or blue");

    if(deckChoice === "red"){
        var game = new Game($("#game-area"), RedDeck);

        game.init();
    } else {
        var game = new Game($("#game-area"), BlueDeck);

        game.init();
    }

    //     var game = new Game($("#game-area"), );
    //
    // game.init();
    
    //resets game on click, randomizes cards, increments game counter
    $("#reset-button").on("click", function(){

        game.resetAll();

    });

});

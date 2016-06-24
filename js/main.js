
$(document).ready(function(){

    var deckChoice = prompt("pick red, blue, or white");

    if(deckChoice === "red"){
        var game = new Game($("#game-area"), RedDeck);

        game.init();
    } else if(deckChoice === "blue"){
        var game = new Game($("#game-area"), BlueDeck);

        game.init();
    } else {
        var game = new Game($("#game-area"), WhiteDeck);

        game.init();
    }
    
    //resets game on click, randomizes cards, increments game counter
    $("#reset-button").on("click", function(){

        game.resetAll();

    });

});

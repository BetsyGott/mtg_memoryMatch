
$(document).ready(function(){

    var deckChoice = prompt("pick red, blue, black, or white");

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
    
    //resets game on click, randomizes cards, increments game counter
    $("#reset-button").on("click", function(){

        game.resetAll();

    });

});

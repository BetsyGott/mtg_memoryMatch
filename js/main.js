
$(document).ready(function(){

        // var $card = $(".card"),
        var game = new Game($("#game-area"));
    
    game.init();

    //perform game logic when cards are clicked
    // $card.on("click", function(){
    //     game.checkMatch($(this));
    // });
    
    //resets game on click, randomizes cards, increments game counter
    $("#reset-button").on("click", function(){

        game.resetAll();

    });

});

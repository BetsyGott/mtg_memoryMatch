/**
 * Handles the global aspects of the game
 * @constructor
 */
function Multiplayer(){
    this.player1 = null;
    this.player2 = null;


}

Multiplayer.prototype.choosePlayers = function(name, deckChoice){
    
        // console.log("name in chooseplayers, ", name, "deckChoice in chooseplayers: ", deckChoice);
    
        if(this.player1 === null){

            console.log("first player");
            
            var gameArea = $("#p1-game-area");
            //if no player 1 the first player is player1

            //create new Player object
            this.player1 = new Player(name);
            
            //assign deckChoice to player 1
            this.player1.assignDeck(deckChoice);

            //placeholder? customize the ability div to the deck chosen
            this.createAbilityContainer(gameArea, this.player1.deck.color, this.player1.deck.glowColor);
            
            //Assign game to player 1
            this.player1.createNewGame(gameArea);

            this.clearFields();

        } else {
            console.log("second player");

            gameArea = $("#p2-game-area");
            
            this.player2 = new Player(name);

            //assign deckChoice to player 2 
            this.player2.assignDeck(deckChoice);

            //placeholder? customize the ability div to the deck chosen
            this.createAbilityContainer(gameArea, this.player2.deck.color, this.player2.deck.glowColor);
            
            //Assign game to player 2
            this.player2.createNewGame(gameArea);

            this.clearFields();
        }

        if(this.player1 && this.player2) {
            console.log("both players selected");
            //if both players are already created, do a random 50/50 calc to determine who goes first
            var firstPlayer = this.determineFirstPlayer() === 0 ? this.player1 : this.player2;

            console.log(firstPlayer);
            
            //hide the intro screen
            $(".overlay").css("opacity",0.8);
            $(".overlay").hide();
            $(".deck-choice").hide();
            
            //show the game area of the firstPlayer
            firstPlayer.game.gameArea.show();
        }
};

Multiplayer.prototype.determineFirstPlayer = function(){
    return Math.floor(Math.random() * 2);
};

//currently in multiplayer but maybe this should be in a view controller??
Multiplayer.prototype.createAbilityContainer = function(gameArea, bgColor, glowColor){
    // console.log("gamearea: ", gameArea, "bgColor: ", bgColor, "glowColor: ", glowColor);
    $("#abilityContainer").css({
        background: 'url("images/blanks/'+bgColor+'_blank.png")no-repeat center center',
        backgroundSize: 'cover',
        boxShadow: '0 0 41px 6px '+glowColor
    });
};

Multiplayer.prototype.clearFields = function(){
    $("#playerName").val("");

};
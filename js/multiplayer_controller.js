/**
 * Handles the global aspects of the game
 * @constructor
 */
function Multiplayer(){
    this.player1 = null;
    this.player2 = null;


}

Multiplayer.prototype.choosePlayers = function(name, deckChoice){
    
        
    
        if(this.player1 === null){
            //if no player 1 the first player is player1

            //create new Player object
            this.player1 = new Player(name);
            
            //assign deckChoice to player 1
            player1.assignDeck(deckChoice);

            //currently in multiplayer but maybe this should be in a view controller??
            $("#abilityContainer").css({
                background: 'url("images/blanks/'+deckChoice.color+'_blank.png")no-repeat center center',
                backgroundSize: 'cover',
                boxShadow: '0 0 41px 6px '+deckChoice.glowColor
            });
            
            //Assign game to player 1
            player1.createNewGame($("#p1-game-area"));

        } else {
            this.player2 = new Player(name);

            //assign deckChoice to player 2 
            player2.assignDeck();
            //Assign game to player 2
            player2.createNewGame($("#p2-game-area"));
        }

        if(this.player1 && this.player2) {
            //if both players are already created, do a random 50/50 calc to determine who goes first
            var firstPlayer = this.determineFirstPlayer() === 0 ? this.player1 : this.player2;

            //show the game area of the firstPlayer
        }
};

Multiplayer.prototype.determineFirstPlayer = function(){
    return Math.floor(Math.random() * 2);
};
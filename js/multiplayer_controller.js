/**
 * Handles the global aspects of the game
 * @constructor
 */
function MultiPlayer(){
    this.player1 = null;
    this.player2 = null;
    this.mpInit = function(name, deckChoice){
        if(this.player1 === null){
            //if no player 1 the first player is player1
            
            //create new Player object
            this.player1 = new Player(name, deckChoice, game);
            
            //run init function to assign game to player
            
        } else {
            this.player2 = new Player(name, deckChoice);
        }
        
        if(this.player1 && this.player2){
        }
    };
}
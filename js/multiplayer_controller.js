/**
 * Handles the global aspects of the game
 * @constructor
 */
function Multiplayer(){
    this.player1 = null;
    this.player2 = null;
    this.currentPlayer = null;


}

Multiplayer.prototype.choosePlayers = function(name, deckChoice){
    
        if(this.player1 === null){

            //if no player 1 the first player is player1
            
            //set player1 game DOM element
            var gameArea = $("#p1-game-area");
            
            //create new Player object
            this.player1 = new Player(name);
            
            //assign deckChoice to player 1
            this.player1.assignDeck(deckChoice);

            //placeholder? customize the ability div to the deck chosen
            this.createAbilityContainer(gameArea, this.player1.deck.color, this.player1.deck.glowColor);
            
            //Assign game to player 1
            this.player1.createNewGame(gameArea);

            $(".player1-stats").find(".player-name").text(this.player1.name);

            $(".player1-stats").find(".deck-text").css({
                color: this.player1.deck.textColor
            });

            this.clearFields();

            $(".intro-player-title").text("Player 2");

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

            $(".player2-stats").find(".player-name").text(this.player2.name);

            $(".player2-stats").find(".deck-text").css({
                color: this.player2.deck.textColor
            });

            this.clearFields();
        }

        if(this.player1 && this.player2) {
            
            //do a random 50/50 calc to determine who goes first
            this.currentPlayer = this.determineFirstPlayer() === 0 ? this.player1 : this.player2;

            //show a coin flipping over overlay bg
            if(this.currentPlayer === this.player1){
                //show heads animation

                //show "Player 1 goes first"
            } else {
                //show tails animation
                console.log("tails");
                //show "Player 2 goes first"
            }
            
            //hide text/coin flip, hide overlay
            
            //change bg color to the person who goes first
            this.changeBackgroundColor(this.currentPlayer);
            
            // this.hideIntroScreen();
            
            //show first player's game area to start
            this.currentPlayer.game.gameArea.show();
        }
};

Multiplayer.prototype.determineFirstPlayer = function(){
    return Math.floor(Math.random() * 2);
};

//currently in multiplayer but maybe this should be in a view controller??
Multiplayer.prototype.createAbilityContainer = function(gameArea, bgColor, glowColor){
    
    $("#abilityContainer").css({
        background: 'url("images/blanks/'+bgColor+'_blank.png")no-repeat center center',
        backgroundSize: 'cover',
        boxShadow: '0 0 41px 6px '+glowColor
    });
};

Multiplayer.prototype.clearFields = function(){
    $("#playerName").val("");

};

//change background based on deck choice
Multiplayer.prototype.changeBackgroundColor = function(player){
    $(".main").css({
        background: "url('"+ player.deck.background +"') no-repeat center fixed",
        backgroundSize: 'cover'
    });
};

Multiplayer.prototype.hideIntroScreen = function(){
    this.hideOverlay();
    this.hidePlayerChoices();
};

// hide name input and mana choices
Multiplayer.prototype.hidePlayerChoices = function(){
    $(".deck-choice").hide();
};


//hide overlay and fog
Multiplayer.prototype.hideOverlay = function(){
    $(".overlay").css("opacity",0.8);
    $(".overlay").hide();
};

Multiplayer.prototype.showIntroScreen = function(){
    $("#p1-game-area").hide();
    $("#p2-game-area").hide();
    $("#abilityContainer").hide();

    $(".overlay").css("opacity",1);
    $(".overlay").show();
    $(".deck-choice").show();
};

Multiplayer.prototype.showCoinFlip = function(){
    
    
    
};
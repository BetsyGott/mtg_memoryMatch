/**
 * Handles the global aspects of the game
 * @constructor
 */
function Multiplayer(){
    this.player1 = null;
    this.player2 = null;
    this.currentPlayer = null;
    this.gamesPlayed = 0;
    this.resetBtn = $("#reset-button");
}

Multiplayer.prototype.quickStart = function(player1Name, player1Deck, player2Name, player2Deck){
    
    this.choosePlayers(player1Name, player1Deck);
    this.choosePlayers(player2Name, player2Deck);
};

Multiplayer.prototype.choosePlayers = function(name, deckChoice){
    
        if(this.player1 === null){
            //TODO clean up the player 1 and player 2 identical code is it happens once with diff targets

            //if no player 1 the first player is player1
            
            //set player1 game DOM element
            var gameArea = $("#p1-game-area");
            var playerStatsDiv = $(".player1-stats");
            var playerAbilityContainer = $("#p1AbilityContainer");
            
            //create new Player object
            if(name === ""){
                this.player1 = new Player("Player 1", this);
            } else {
                this.player1 = new Player(name, this);
            }

            //assign deckChoice to player 1
            this.player1.assignDeck(deckChoice);

            //placeholder? customize the ability div to the deck chosen
            this.createAbilityContainer("p1", gameArea, this.player1.deck.color, this.player1.deck.glowColor);
            
            //Assign game to player 1
            this.player1.createNewGame(gameArea, playerStatsDiv, playerAbilityContainer);

            $(".player1-stats").find(".player-name").text(this.player1.name);

            $(".player1-stats").find(".deck-text").css({
                color: this.player1.deck.textColor
            });

            this.clearFields();

            $(".intro-player-title").text("Player 2");

        } else {

            gameArea = $("#p2-game-area");
            playerStatsDiv = $(".player2-stats");
            playerAbilityContainer = $("#p2AbilityContainer");

            if(name === ""){
                this.player2 = new Player("Player 2", this);
            } else {
                this.player2 = new Player(name, this);
            }

            //assign deckChoice to player 2 
            this.player2.assignDeck(deckChoice);

            //placeholder? customize the ability div to the deck chosen
            this.createAbilityContainer("p2", gameArea, this.player2.deck.color, this.player2.deck.glowColor);
            
            //Assign game to player 2
            this.player2.createNewGame(gameArea, playerStatsDiv, playerAbilityContainer);

            $(".player2-stats").find(".player-name").text(this.player2.name);

            $(".player2-stats").find(".deck-text").css({
                color: this.player2.deck.textColor
            });

            this.clearFields();
        }

        if(this.player1 && this.player2) {

            this.hidePlayerChoices();
            this.createResetClickEvent();

            $(".coin-container").show();
            $(".coinflip-title").show();
            
            //do a random 50/50 calc to determine who goes first
            this.currentPlayer = this.determineFirstPlayer() === 0 ? this.player1 : this.player2;

            //TODO re-enable after testing
            //show a coin flipping over overlay bg
            setTimeout( (function() {

                this.showCoinFlip(this.currentPlayer);

            }.bind(this)), 300);
            
            //change bg color to the person who goes first
            this.changeBackgroundColor(this.currentPlayer);
            
            //show first player's game area to start
            this.currentPlayer.game.gameArea.show();
        }
};

Multiplayer.prototype.determineFirstPlayer = function(){
    return Math.floor(Math.random() * 2);
    
};

//currently in multiplayer but maybe this should be in a view controller??
Multiplayer.prototype.createAbilityContainer = function(playerNum, gameArea, bgColor, glowColor){
    
    $("#"+playerNum+"AbilityContainer").css({
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

Multiplayer.prototype.hideCoinFlip = function(){
    $(".coin-container").hide();
    $(".coinflip-title").hide();
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

Multiplayer.prototype.hideFields = function(){
    $("#p1-game-area").hide();
    $("#p2-game-area").hide();
    $("#p1AbilityContainer").hide();
    $("#p2AbilityContainer").hide();
    $(".coin-container").hide();
    $(".coinflip-title").hide();
};

Multiplayer.prototype.showIntroScreen = function(){

    $(".overlay").css("opacity",1);
    $(".overlay").show();
    $(".deck-choice").show();
};

Multiplayer.prototype.showCoinFlip = function(currentPlayer){

    if(currentPlayer === this.player1){

        //heads animation
        $(".coin").transition({

            rotateY: '+=3960deg'

        },1000);
            //TODO return to the below spin after testing
        // },10000);
        
    } else {
        
        // tails animation
        $(".coin").transition({

            rotateY: '+=4140deg'

        },1000);
        //TODO return to the below spin after testing
        // },10000);

    }

    $(".coin").on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        $(".coinflip-title-text").text(currentPlayer.name+" Goes First.");

        setTimeout( (function() {

            //hide text/coin flip, hide overlay
            // this.hideCoinFlip();
            $(".coin-container").hide();
            $(".coinflip-title").hide();
            // this.hideOverlay();
            $(".overlay").css("opacity",0.8);
            $(".overlay").hide();

            //TODO change below to 5000 after testing
         }.bind(this)), 500);
        
    });
};

Multiplayer.prototype.endTurn = function(){
    
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;

    this.changeBackgroundColor(this.currentPlayer);

    this.switchDeck();
    
    //TODO add animation to switch so it's less jarring and it gives some cue of whose turn it is
    //this.animateTurnSwitch();

    return this.currentPlayer;
    
};

Multiplayer.prototype.informWin = function(){
    alert(this.currentPlayer.name+ " wins!");
    this.currentPlayer.game.canClick = false;
};

Multiplayer.prototype.switchDeck = function(){
    //hide both decks
    this.player1.game.gameArea.hide();
    this.player2.game.gameArea.hide();

    //show current player's deck
  this.currentPlayer.game.gameArea.show();
};

Multiplayer.prototype.animateTurnSwitch = function(){
    //add some sort of fog or swishing air animation 
    
    //add some kind of text that says this.currentPlayer.name + "'s Turn!"
    
    //then hide animation, hide text
};

//sourcePlayer is the player that sends the handleDamage request
Multiplayer.prototype.handleDamage = function(target, amount, sourcePlayer){
    
    if(target === "opponent"){
        if(sourcePlayer === this.player1){
            target = this.player2;
        } else {
            target = this.player1;
        }
    } else {
        target = sourcePlayer;
    }
    
    //todo show an animation here that tells how much damage was dealt and deletes it from the total
    
    target.removeLife(Math.round(amount()));
};


Multiplayer.prototype.handleLifeGain = function(target, amount, sourcePlayer){
    
    if(target === "opponent"){
    
        if(sourcePlayer === this.player1){
            target = this.player2
        }else {
            target = this.player1;
        }
    } else {
        target = sourcePlayer;
    }
    
    //todo show an animation here that tells how much life was gained and deletes it from the life total
    
  target.addLife(amount());
    
};

Multiplayer.prototype.handleZeroLoss = function(losingPlayer){
    if(losingPlayer === this.player1){
        var winningPlayer = this.player2;
    } else {
        winningPlayer = this.player1;
    }
    alert(losingPlayer.name + " has been eliminated. " + winningPlayer.name + " wins the game!");
    winningPlayer.incrementWin();
    losingPlayer.incrementLoss();
    
    this.showResetButton();
};

Multiplayer.prototype.createResetClickEvent = function(){
    this.resetBtn.on("click", (function(){

        this.resetAll();

    }).bind(this));
};

//resets game on click, randomizes cards, increments game counter
Multiplayer.prototype.resetAll = function(){
  this.player1.resetAll();  
};

Multiplayer.prototype.displayStats = function(){
    
};

Multiplayer.prototype.showResetButton = function(){
  this.resetBtn.show();  
};

Multiplayer.prototype.hideResetButton = function(){
    this.resetBtn.hide();
};
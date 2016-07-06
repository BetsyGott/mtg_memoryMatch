//TODO: putting normal settings back

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
    this.winningPlayer = null;
}

Multiplayer.prototype.quickStart = function(player1Name, player1Deck, player2Name, player2Deck){
    
    this.choosePlayers(player1Name, player1Deck);
    this.choosePlayers(player2Name, player2Deck);
};

Multiplayer.prototype.choosePlayers = function(name, deckChoice){
    
    var playerName = "";
    
    if(this.player1 === null){

        //give a default name if none provided
        playerName = name === "" ? "Player 1" : name;

        this.player1 = new Player(playerName, this);
            
        this.initPlayerArea(this.player1, $("#p1-game-area"), $(".player1-stats"), $("#p1AbilityContainer"), "p1", playerName, deckChoice);

        this.clearFields();

        $(".intro-player-title").text("Player 2");

    } else {

        playerName = name === "" ? "Player 2" : name;

        this.player2 = new Player(playerName, this);
        
        this.initPlayerArea(this.player2, $("#p2-game-area"), $(".player2-stats"), $("#p2AbilityContainer"), "p2", playerName, deckChoice);

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
            
            this.showCurrentPlayerArea();
        }
};

Multiplayer.prototype.initPlayerArea = function(player, gameArea, playerStatsDiv, playerAbilityContainer, abilityContainerName, name, deckChoice){
    
    player.assignDeck(deckChoice);
    
    this.createAbilityContainer(abilityContainerName, gameArea, player.deck.color, player.deck.glowColor);
    
    player.createNewGame(gameArea, playerStatsDiv, playerAbilityContainer);

    playerStatsDiv.find(".player-name").text(player.name);

    playerStatsDiv.find(".deck-text").css({
        color: player.deck.textColor
    });
};

Multiplayer.prototype.determineFirstPlayer = function(){
    return Math.floor(Math.random() * 2);
    
};

Multiplayer.prototype.showCurrentPlayerArea = function(){
    this.changeBackgroundColor(this.currentPlayer);

    this.switchDeck();
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

    $(".mana-symbol").click(function(){

        var paramsArray = [];

        var playerName = $("#playerName").val();

        var deckChoice = $(this).attr("data-deck");

        var capName = deckChoice[0].toUpperCase() + deckChoice.substring(1) + 'Deck';

        paramsArray.push(playerName);
        paramsArray.push(window[capName]);

        return paramsArray;

    });

    $(".mana-symbol").click((function(event){
        this.choosePlayers(event.result[0], event.result[1]);
    }).bind(this));

    this.hideWinScreen();
    $(".turn-msg").hide();
    $(".ability-container").hide();
    this.hideCoinFlip();
    
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

            $(".coin-container").hide();
            $(".coinflip-title").hide();
            $(".overlay").css("opacity",0.8);
            $(".overlay").hide();

            //TODO change below to 5000 after testing
         }.bind(this)), 500);
        
    });
};

Multiplayer.prototype.endTurn = function(){
    
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;

    this.showCurrentPlayerArea();

    this.animateTurnSwitch();

    return this.currentPlayer;
    
};

Multiplayer.prototype.switchDeck = function(){

    this.player1.game.gameArea.hide();
    this.player2.game.gameArea.hide();
    
  this.currentPlayer.game.gameArea.show();
};

Multiplayer.prototype.animateTurnSwitch = function(){

    $(".turn-msg").show();
    $(".turn-txt").text(this.currentPlayer.name + "'s Turn!");
    $(".turn-msg").addClass("turn-msg-animate");

    setTimeout(function(){
        $(".turn-msg").removeClass("turn-msg-animate");
        $(".turn-msg").hide();
    }, 2600);
};

//sourcePlayer is the player that sends the handleDamage request
Multiplayer.prototype.handleLifeTotalChange = function(changeType, target, amount, sourcePlayer){

    var roundedAmt = Math.round(amount());
    
    if(target === "opponent"){
        if(sourcePlayer === this.player1){
            target = this.player2;
        } else {
            target = this.player1;
        }
    } else {
        target = sourcePlayer;
    }

    this.animateLifeTotalChange(changeType, target, roundedAmt);
};

Multiplayer.prototype.animateLifeTotalChange = function(changeType, target, amount){
    target.animateLifeTotalChange(changeType, amount);
};

Multiplayer.prototype.handleWinLoss = function(winningPlayer, losingPlayer){
    var loser = losingPlayer;
    if(loser) {
        if (loser === this.player1) {
            this.winningPlayer = this.player2;
        } else {
            this.winningPlayer = this.player1;
        }
    } else {
        if (winningPlayer === this.player1) {
            this.winningPlayer = this.player1;
            loser = this.player2;
        } else {
            this.winningPlayer = this.player2;
            loser = this.player1;
        }
    }

    this.winningPlayer.incrementWin();
    loser.incrementLoss();

    this.showWinScreen(this.winningPlayer.name, loser.name);

    this.turnOffClicks(this.player1);
    this.turnOffClicks(this.player2);

};

Multiplayer.prototype.createResetClickEvent = function(){
    this.resetBtn.on("click", (function(){

        this.resetAll();

    }).bind(this));
};

//resets game on click, randomizes cards, increments game counter, losing player goes first in new game
Multiplayer.prototype.resetAll = function(){

    this.player1.handleReset();
    this.player2.handleReset();
    
    if(this.winningPlayer === this.player1){
        this.currentPlayer = this.player2;

    } else {
        this.currentPlayer = this.player1;
    }

    this.winningPlayer = null;
    this.hideWinScreen();
    this.hideOverlay();
    this.showCurrentPlayerArea();

};

Multiplayer.prototype.turnOffClicks = function(player){
    player.turnOffClicking();
};

Multiplayer.prototype.showWinScreen = function(winningPlayer, losingPlayer) {

    $(".overlay").show();
    $(".win-box").show();

    if (losingPlayer) {

        $(".winning-msg").html(losingPlayer + " has been eliminated. " + winningPlayer + " wins!");
    } else {
        $(".winning-msg").html(winningPlayer + " matched all their cards first. " + winningPlayer + "wins!");
    }
};

Multiplayer.prototype.hideWinScreen = function(){
    $(".win-box").hide();
};
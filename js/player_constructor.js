function Player(name, parent){
    this.parent = parent;
    this.name = name;
    this.deck = null;
    this.game = null;
    this.lifeTotal = 20;
    this.activeEffects = {};
}

Player.prototype.assignDeck = function(deckChoice){
  this.deck = new deckChoice(this);  
    
    return this.deck;
};

Player.prototype.createNewGame = function(gameArea, playerStatsDiv, playerAbilityContainer){
    this.game = new Game(gameArea, playerStatsDiv, playerAbilityContainer, this);
    
    this.game.init();
    
    return this.game;
};

Player.prototype.handleTurnEnd = function(){
    this.parent.endTurn();
};

Player.prototype.handleWin = function(){
    this.parent.informWin();
};

Player.prototype.addLife = function(amount){
    this.lifeTotal = this.lifeTotal + amount;
    
    return this.lifeTotal;
};

Player.prototype.removeLife = function(amount){
    if(this.lifeTotal - amount <= 0){
        this.lifeTotal = 0;
    }else {
        this.lifeTotal = this.lifeTotal - amount;
    }
    
    return this.lifeTotal;
};

Player.prototype.getPlayerName = function(){
    return this.name;
};


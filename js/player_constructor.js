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

Player.prototype.handleLoss = function(){
  console.log("loss due to zero life");
    //tbd what to actually do here
};

Player.prototype.addLife = function(amount){
    this.lifeTotal = this.lifeTotal + amount;

    this.game.displayStats(this.game.playerStatsDiv);

    return this.lifeTotal;
};

Player.prototype.removeLife = function(amount){
    if(this.lifeTotal - amount <= 0){
        this.lifeTotal = 0;
    } else {
        this.lifeTotal = this.lifeTotal - amount;
    }

    this.game.displayStats(this.game.playerStatsDiv);
    
    return this.lifeTotal;
};

Player.prototype.handleDamage = function(target, amount){
    this.parent.handleDamage(target, amount, this);
};

Player.prototype.handleLifeGain = function(target, amount){
    this.parent.handleLifeGain(target, amount, this);
};

Player.prototype.getMatchCount = function(){
    console.log(this.game);
    return this.game.getMatchCount();
};

Player.prototype.getPlayerName = function(){
    return this.name;
};

Player.prototype.getLifeTotal = function(){
    console.log("life total is: ", this.lifeTotal);
    return this.lifeTotal;
};


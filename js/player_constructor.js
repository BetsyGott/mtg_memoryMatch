
function Player(name, parent){
    this.parent = parent;
    this.name = name;
    this.deck = null;
    this.game = null;
    this.lifeTotal = 20;
    this.wins = 0;
    this.losses = 0;
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
    this.game.turnOffClick();
    this.parent.handleZeroLoss(this);
};

Player.prototype.addLife = function(amount){
    this.lifeTotal = this.lifeTotal + amount;

    this.game.displayStats(this.game.getStatsDiv());

    return this.lifeTotal;
};

Player.prototype.removeLife = function(amount){
    if(this.lifeTotal - amount <= 0){
        this.lifeTotal = 0;

        setTimeout( (function(){
            this.handleLoss();
        }).bind(this), 1700);

    } else {
        this.lifeTotal = this.lifeTotal - amount;
    }

    this.game.displayStats(this.game.getStatsDiv());
    
    return this.lifeTotal;
};

Player.prototype.setLifeTotal = function(amount){
  this.lifeTotal = amount;

  return this.lifeTotal;
};

Player.prototype.handleDamage = function(target, amount){
    this.parent.handleLifeTotalChange("damage", target, amount, this);
};

Player.prototype.handleLifeGain = function(target, amount){
    this.parent.handleLifeTotalChange("lifeGain", target, amount, this);
};

Player.prototype.getMatchCount = function(){
    
    return this.game.getMatchCount();
};

Player.prototype.getPlayerName = function(){
    return this.name;
};

Player.prototype.getLifeTotal = function(){
    return this.lifeTotal;
};

Player.prototype.handleStatusEffect = function(statusDetails){
    this.parent.handleStatusEffect(this, statusDetails);  
};

Player.prototype.handleReset = function(){
  this.game.resetAll();  
};

Player.prototype.incrementWin = function(){

    this.wins++;
    
    this.game.displayStats(this.game.getStatsDiv());
};

Player.prototype.incrementLoss = function(){
  this.losses++;

    this.game.displayStats(this.game.getStatsDiv());
};

Player.prototype.getWins = function(){

  return this.wins;  
};

Player.prototype.getLosses = function(){
    return this.losses;
};

Player.prototype.turnOffClicking = function(){
  this.game.turnOffClick();  
};


function Player(name, deckChoice){
    this.name = name;
    this.deck = deckChoice;
    this.game = new Game($("#game-area"), this);
    this.lifeTotal = 20;
    this.activeEffects = {};
}

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


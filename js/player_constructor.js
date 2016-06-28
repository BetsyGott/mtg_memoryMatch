function Player(deckChoice, name){
    this.playerNumber = null;
    this.name = name;
    this.deck = deckChoice;
    this.lifeTotal = 20;
    this.activeEffects = {};
    this.opponent = this.playerNumber === "player1" ? "player2" : "player1";
}
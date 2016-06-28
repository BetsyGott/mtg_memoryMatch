
/**
 * Card prototype constructor
 * @param parent
 * @constructor
 */
function Card(parent, infoObject) {
    this.parent = parent;
    this.infoObject = infoObject;
    this.$element = null;
    this.$front = null;
    this.$back = null;
    this.$frontImage = null;
    this.$backImage = null;
}

//this function will create one card
//first randomize the array of front image srcs, then do a loop and run through this function for each src in the arr

Card.prototype.createSelf = function(frontImage, backImage){
    //create the element that will represent the object on the dom
    this.$element = $("<div>",{
        class: 'card'
    });

    this.$front = $("<div>",{
        class: 'front'
    });

    this.$back = $("<div>",{
        class: 'back'
    });

    this.$frontImage = $("<img>", {
        src: frontImage
    });

    this.$backImage = $("<img>", {
        src: backImage
    });

    this.$element.append(this.$front, this.$back);
    this.$front.append(this.$frontImage);
    this.$back.append(this.$backImage);

    this.$element.on('click', this.handleClick.bind(this));

    return this.$element;
};

Card.prototype.handleClick = function(){
    //parent.checkMatch($(this));
    this.parent.checkMatch(this);
};

//getCardFace  - which card is this
Card.prototype.getCardFace = function(){
  return this.$element.find(".front > img").attr("src");  
};

Card.prototype.addFlippedClass = function(){
    this.$element.addClass("flipped");
    return this.$element;
};

Card.prototype.removeFlippedClass = function(){
    this.$element.removeClass("flipped");
    return this.$element;
};




$(document).ready(function(){
    var firstCard,
        secondCard,
        totalMatches = 9,
        matchCounter = 0,
        $card = $(".card"),
        $front = $(".front"),
        $back = $(".back"),
        canClick = true,
        matches = 0,
        attempts = 0,
        misses = 0,
        accuracy = 0,
//      when reset button is clicked gamesPlayed increments by 1        
        gamesPlayed = 0,
        imageArray = [];

    // function pushes 9 unique images into array
    function pushImages(){
        imageArray.push('<img src="images/card_faces/blue/air_elemental_sm.jpeg"/>');
        imageArray.push('<img src="images/card_faces/blue/brainstorm_sm.jpeg"/>');
        imageArray.push('<img src="images/card_faces/blue/force_of_will_sm.jpeg"/>');
        imageArray.push('<img src="images/natsuki_crop.png"/>');
        imageArray.push('<img src="images/love_machine_crop.png"/>');
        imageArray.push('<img src="images/uncle_mansuke.png"/>');
        imageArray.push('<img src="images/lovemachine_final_crop.jpg"/>');
        imageArray.push('<img src="images/riichi_avatar.png">');
        imageArray.push('<img src="images/yorihiko_jinnouchi.png"/>');
    }

    //randomizes the images in the array, populates each card front with an image, and deletes that image from imageArray as it goes
    function randomizeImages(){
        pushImages();
        pushImages();

        $(".card").each(function(){
            var i = Math.floor(Math.random()*imageArray.length-1)+1;

            $(this).find(".front").html(imageArray[i]);

            imageArray.splice(i, 1);

        });
    }

    // run function 2x (to get 18 images in array)
    // randomize array positions (math.floor(math.random()*array.length-1)+1

    //on page load, randomize images
    randomizeImages();

    //perform game logic when cards are clicked
    $card.on("click", cardClicked);

    // displays the stats on the left hand side
    function displayStats(){

        $(".games-played .value").html(gamesPlayed);

        $(".matches .value").html(matches);

        $(".attempts .value").html(attempts);

        $(".misses .value").html(misses);

        // if attempts = 0 then accuracy = 0% to avoid divide by zero
        if(attempts === 0){
            accuracy = "0%";
            $(".accuracy .value").html(accuracy);
        } else{
            //format accuracy
            accuracy = Math.floor((matches / attempts)*100);
            $(".accuracy .value").html(accuracy + "%");
        }

    }
    //resets stats
    function resetStats(){
        accuracy = 0;
        matches = 0;
        attempts = 0;
        misses = 0;

        displayStats();
    }

    //performs logic of game
    function cardClicked(){

        //check canClick is true, rest of code only executes if true

        if(canClick){

            // on click, flip card
            $(this).addClass("flipped");

//          check if firstCard is null
            if(!firstCard){

//              if null, make firstCard = this, then done
                firstCard = $(this);

            } else {

                // if !null, set secondCard = this
                secondCard = $(this);

                // check if firstCard === secondCard (by checking whether the .front <img> matches
                if(firstCard.find(".front > img").attr("src") === secondCard.find(".front > img").attr("src")){

                    // if true, increase match counter and matches stat
                    matchCounter++;
                    matches++;
//              increment attempts counter
                    attempts++;
                    
//            reset firstCard and secondCard & wait for next card click
                    firstCard = secondCard = null;

                    // check if matchCounter === totalMatches
                    if(matchCounter === totalMatches){

                        // if true, Display Win Message
                        alert('you won!');

                    }
                } else{
                    // if false (firstCard !== secondCard)
                    // set canClick to false to prevent user interaction during timeout

                    canClick = false;

                    // wait 1.7s then flip back both elements

                    setTimeout( function() {
                        $(firstCard).add(secondCard).removeClass("flipped");
//                 reset firstCard & secondCard
                        firstCard = secondCard = null;
//                  reset canClick to true again
                        canClick = true;

                    }, 1700);

//                  after flip back, increment misses stat by 1
                    misses++;
//              increment attempts counter
                    attempts++;
                }
            }
        }

        displayStats();
    }
    
    //resets game on click, randomizes cards, increments game counter
    $("#reset-button").click(function(){

        canClick = false;
        gamesPlayed++;
        resetStats();
        displayStats();

        if($(".card").hasClass("flipped")){
            $(".card").removeClass("flipped");
        }

        // timeout on randomize images so you can't see images for split second before flipped back
        setTimeout(function(){

            randomizeImages();
            canClick = true;

        } , 1000)

    });

});


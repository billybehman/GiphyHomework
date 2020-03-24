

var animalButtons = ["frog", "shark", "black mamba", "caterpillar", "snake", "lion"]

function runLoop() {

    //     console.log("hello")

    // var buttonLocation = $("<div>")

    // buttonLocation.attr('id', 'buttonSpot');

    $("#buttonSpot").empty();

    for (var i = 0; i < animalButtons.length; i++) {

        var aButton = $("<button>");
        
        aButton.addClass("animalGods");
    
        aButton.attr("data-name", animalButtons[i]);

        aButton.text(animalButtons[i]);

        $("#buttonSpot").append(aButton);
    };


};

runLoop ();


$(document).on("click", "#animalButton", function(){
//$("#animalButton").on("click", function(event) {

    event.preventDefault();


    var animal = $("#animalInput").val();
    console.log(animal)

    makeItHappen(animal);

    animalButtons.push(animal)

            runLoop();

    });


    function makeItHappen(animal) {

        $("#gifsHere").empty();

            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=ZPVqgETJ6vKsx8tifuEmT9rYAIXEK9Oi";

            $.ajax({
            url: queryURL, 
            method: "GET"
        }).then(function(response) {

            var wow =response.data
        
            for (var i = 0; i < wow.length; i++) {

                var individualGif = $("<div>");

                var rating = $("<p>").text("Rating: " + wow[i].rating);

                var gifURLMoving = response.data[i].images.fixed_height.url;

                var gifURLStill = response.data[i].images["480w_still"].url;

                // var WTF = $("<img>").attr("src", gifURLStill);

                // $("#whoCares").append(WTF)

                var theGif = $("<img>").attr("src", gifURLMoving);

                theGif.attr("data-still", gifURLStill);

                theGif.attr("data-moving", gifURLMoving);

                theGif.attr("data-state", "animated");

                theGif.addClass("showingAnimal");

                //theGif.attr("data-still", gifURLStill)

                individualGif.append(theGif)
                individualGif.append(rating)

                $("#gifsHere").append(individualGif);

                

            };


            console.log(response)
            console.log(response.data[0].images.fixed_height)
            console.log(queryURL)
          

        // animalButtons.push(animal)

        //     runLoop();


            // var aButton = $("<button>").text(animal)
            
            // aButton.addClass("animal-btn");

            // aButton.attr("data-name", animal);
            
            // $("#buttonSpot").append(aButton)

            
        });

};


//$(".showingAnimal").on("click", function() {

$(document).on("click", ".showingAnimal", function(){

    console.log("hello Sir")

    var animateda = $(this).data();

   freakinAnimal = animateda.state
   // if (animateda.name)

    //console.log(freakinAnimal)

    var butt = $(this).data();

    console.log(butt)

    var what = butt.still
   

    if(freakinAnimal === "animated") {

        $(this).attr("src", what);

        $(this).attr("data-state", "still");

        var monkey = $(this).data();

        // var frog = monkey.state

        // console.log(frog)

        console.log(monkey)

    } else {

        var chicken = $(this).data();

        var lizard = chicken.moving

        $(this).attr("src", lizard);

    }


});



$(document).on("click", ".animalGods", function() {

//$(".animalGods").on("click", function() {

    

    console.log("hello")

    var godAnimal = $(this).data();

    var animal = godAnimal.name
    
    console.log(animal);

    makeItHappen(animal);

});





// var hello = $("<h1>").text("hello")
// $("#gifsHere").append(hello)


// hello.on("click", function(){

//     console.log("helloSire")

// });
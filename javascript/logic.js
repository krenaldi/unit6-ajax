var topics = ["Deadpool", "The Matrix", "Lost", "Stranger Things", "Spider-Man", "Archer", "Annabelle", "John Wick", "Family Guy", "Rick & Morty"];

// Function to create dynamic buttons from the topics array
function renderButtons() {
    $("#button-div").empty();
    // Loop thru topics array
    for (var i=0; i < topics.length; i++){
        // Dynamically render the buttons
        var g = $("<button>");
        // Adding class of gif-btn to buttons
        g.addClass("gif-btn");
        // Adding data attribute to buttons
        g.attr("data-name", topics[i]);
        // Adding button text
        g.text(topics[i]);
        // Adding button to the button-div
        $("#button-div").append(g);
    }
}

// Function that renders the HTML to display gifs from Giphy
function displayGifs(){
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    //Creating AJAX call for specific button clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        // Since image info is inside the data key, using variable to hold full key
        var results = response.data;
        // Looping thru response data and generate divs to hold images & ratings info
        for (var i=0; i < results.length; i++){
            var gifDiv = $("<div>");
            var p = $("<p>").text(results[i].rating);
            var gifImage = $("<img>");
            gifImage.addClass("gif");
            gifImage.attr({
                src: results[i].images.fixed_height.url,
                "data-still": results[i].images.fixed_height.url,
                "data-animate": results[i].images.fixed_height.url,
                "data-state": "still"
            });
            gifDiv.append(gifImage);
            gifDiv.append(p);
            $("#gifs-appear-here").prepend(gifDiv);
        }
    })
}


// Event handler to add button from form to the button-div thru the topics array
$("#add-gif-button").on("click", function(event) {
    // Prevent the button from submitting
    event.preventDefault();
    // Grab the input text from textbox
    var topic = $("#gif-input").val().trim();
    // Adding topic from textbox to topics array
    topics.push(topic);
    // Call renderButtons function to handle processing of updated topics array
    renderButtons();
});

// Calling renderButtons function to display the initial buttons in the topics array
renderButtons();

// Adding click event for all button elements with class of gif to trigger the displayGifs function
$("button").on("click", ".gif", displayGifs);
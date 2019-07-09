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
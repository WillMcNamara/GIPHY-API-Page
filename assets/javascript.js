var topics = ["one", "two", "three"];

//print topics array as buttons
function printButtons() {
    
    $("#buttons").empty();

    for (i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.text(topics[i]);
        button.attr("topic-name", topics[i]);
        $("#buttons").append(button);
    }
}

//function for grabbing gifs from API
function gifAppear() {

    var gif = $(this).attr("topic-name")
    var queryURL = "api.giphy.com/v1/gifs/search?api_key=yok1vkn3R9JFKHVSbKVuGMf91YlDubwN&q=" + gif + "&limit=10&offset=0&rating=PG-13&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("#gifDisplay").empty();
        
        for (i = 0; i < response.data.length; i++) {
        $("#gifDisplay").html("<div>Rating:" + response.data.rating + "</div><div><img href=" + response.data.images.fixed_height_still + "></div>");
        }
    })
}

$(document).ready(function() {

//add button and push to array
$("#add-topic").on("click", function(event) {
    event.preventDefault();

    var newTopic = $("#newTopic").val().trim();
    console.log(newTopic);
    topics.push(newTopic);
    printButtons();
})

$(".gifs").on("click", function() {
    event.preventDefault();

    //if moving set to still and vice versa, use JSON pathing
})


printButtons();

});
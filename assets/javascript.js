var topics = [];

//print topics array as buttons
function printButtons() {
    
    $("#buttons").empty();

    for (i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.append(topics[i]);
        $("#buttons").append(button);
    }
}

$("#add-topic").on("click", function(event) {
    event.preventDefault();

    var newTopic = $("#newTopic").val().trim();
    topics.push(newTopic);
    printButtons();

})

$(".gifs").on("click", function() {
    //if moving set to still and vice versa, use JSON pathing
})
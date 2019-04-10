//array of search querys
var topics = ["bananas", "bagels", "waffles", "watermelon", 
              "ice cream", "chocolate", "cereal", "juice",
              "cake", "beans", "burrito", "cheese", "chicken"
             ];

//print topics array as buttons
function printButtons() {
    
    $("#buttons").empty();

    for (i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.text(topics[i]);
        button.addClass("topics btn btn-primary mr-1 mt-2");
        button.attr("topic-name", topics[i]);
        $("#buttons").append(button);
    }
}

//function for grabbing gifs from API
function gifAppear() {

    var gif = $(this).attr("topic-name");
    console.log(gif);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=yok1vkn3R9JFKHVSbKVuGMf91YlDubwN&q=" + gif + "&limit=10&offset=0&rating=PG-13&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("#gifDisplay").empty();
        console.log(response)
        
        for (i = 0; i < response.data.length; i++) {
            console.log(response.data[i].images.fixed_height_still.url);
        $("#gifDisplay").append("<div class='float-left mx-2 mb-1'><p>Rating: " + response.data[i].rating + "</p><img class='gifs' state='still' stillLink='" + response.data[i].images.fixed_height_still.url +"' animatedLink='" + response.data[i].images.fixed_height_downsampled.url + "' src=" + response.data[i].images.fixed_height_still.url + "></div>");
        }
    })
}

//animate/make still gifs on click
function animate() {
    if ($(this).attr("state") === "still") {
        $(this).attr("src", $(this).attr("animatedLink"));
        $(this).attr("state", "animated");
      }
    else {
        $(this).attr("src", $(this).attr("stillLink"));
        $(this).attr("state", "still");
    }
}

$(document).ready(function() {

//add button and push it to array
$("#add-topic").on("click", function(event) {
    event.preventDefault();

    var newTopic = $("#newTopic").val().trim().toLowerCase();
    console.log(newTopic);
    
    //disallow repeat buttons
    if (topics.indexOf(newTopic) === -1) {
        topics.push(newTopic);
    }
    printButtons();
})

$(document).on("click", ".topics", gifAppear);

$(document).on("click", ".gifs", animate)

printButtons();

});
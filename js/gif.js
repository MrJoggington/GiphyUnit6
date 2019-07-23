$( document ).ready(function() {
// create variables for inputs
// ===================================
 var gifButts = []

 function renderButtons() {
    $("#gif-buttons").empty()

    for(var i = 0; i < gifButts.length; i++) {
        var a = $("<button>");
        a.addClass("gif-btn");
        a.attr("data-name", gifButts[i]);
        a.text(gifButts[i]);
        $("#gif-buttons").append(a)
    }
}
// creating buttons to add to the gif buttons
// ====================================

$('#add-gif').on('click', function(event){
    event.preventDefault()
    let gifVal = $('#gif-input').val().trim()
    gifButts.push(gifVal);
    renderButtons();
    });
  

    renderButtons()

function displayGif(){
    $('#gifDiv').empty() // to clear out the div your gifs are going to
        

var person = $(this).attr("data-name");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=TWH8G0TU5TrPRO2Z9qAKNwMeS0SigULG&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function(response){
        var results = response.data
        
        for(var i = 0; i < results.length; i++){
            if(results[i].rating !== "r") {
                var divGif = $("<div>")
                var rating = results[i].rating;
                var p = $("<p>").text("rating: " + rating);
                var gifImage = $("<img>")
                gifImage.attr("src", results[i].images.fixed_height.url)
                divGif.append(p);
                divGif.append(gifImage);
                $("#gif-div").prepend(divGif)
               

            }
        

        }
    })

}

$(document).on('click', '.gif-btn', displayGif)

renderButtons()











})

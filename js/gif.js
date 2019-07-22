// create variables for inputs
// ===================================
 var gifButts = ["michael jackson", "cyborg and beast boy"]

// read button so that input cvalues create gifs and buttons
// ====================================
function renderButtons() {
    $("#gif-buttons").empty()

    for(var i = 0; i < gifButts.length; i++) {
        var a = $("<button>");
        a.addClass("gif");
        a.attr("data-name", gifButts[i]);
        a.text(gifButts[i]);
        $("#gif-buttons").append(a)
    }
}


$('#add-gif').on('click', function(event){
event.preventDefault()
let gifVal = $('#gif-input').val().trim()
gifButts.push(gifVal);
renderButtons();
});
renderButtons();
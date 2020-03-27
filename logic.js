//  **  Declaration

var apiKey = "";                    //  Here's the API Key we're gonna be using for our requests
var searchTerm = "";                //  The search term we'll be using in our request

//  **  Functions

function getAjax(queryURL, responseCall) {
    $.ajax({
        method: "GET",
        url: queryURL
    }).then(responseCall(response));
}

//  **  Event Calls


//  **  Logic


//  **  Declaration

var apiKey = "";                    //  Here's the API Key we're gonna be using for our requests
var searchTerm = "";                //  The search term we'll be using in our request

//  **  Functions

/**
 * Execute an Ajax API call
 * 
 * @param {*} queryURL Full URL for the API query
 * @param {*} responseCall Function to execute when the Ajax response comes in. 'function myFunction (response) {};'
 */
function getAjax(queryURL, responseCall) {
    $.ajax({
        method: "GET",
        url: queryURL
    }).then(responseCall(response));
}

//  **  Event Calls


//  **  Logic


//  **  Declaration

var _apiKey = "gAE9qvl59oWORBff4NG2zgSXSHlBluIm";                    //  Here's the API Key we're gonna be using for our requests
var _searchTerm = "";                //  The search term we'll be using in our request

var _queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=gAE9qvl59oWORBff4NG2zgSXSHlBluIm"




//  **  Functions

/**
 * Execute an Ajax API call
 * 
 * @param {*} queryURL Full URL for the API query
 * @param {*} responseCall Function to execute when the Ajax response comes in. 'function myFunction (response) {};'
 */
function getAjax(queryURL, responseCall) {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        consoleLogIt(response);
    });
}

function createFilterString(filterObject) {
    var returnString = "";

    
}

function tryMeOut() {
    getAjax(_queryURL, consoleLogIt);
}

function consoleLogIt(response) {
    console.log(response);
    for (fieldValue in response) {
        console.log(fieldValue);
    }
}

// tryMeOut();

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=gAE9qvl59oWORBff4NG2zgSXSHlBluIm"
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
}); 

// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=gAE9qvl59oWORBff4NG2zgSXSHlBluIm"
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);
// });

//  **  Event Calls


//  **  Logic


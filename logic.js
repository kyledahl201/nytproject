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
var queryString = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
var apiKey = "api-key=gAE9qvl59oWORBff4NG2zgSXSHlBluIm"

var authorName = "";
var headLine = "";
var numberOfResults = 5;
var searchResults = [];

function queryAPI() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        // searchResults = [];
        for (var i = 0; i < numberOfResults; i++) {
            let resultObject = {
                headline: response.response.docs[i].headline.main,
                author: response.response.docs[i].byline.original
            };

            searchResults.push(resultObject);
        };
    }); 
};

function apiSearchTerm(searchTerm) {
    return "q=" + searchTerm;
}

function apiDates(beginDate, endDate) {
    var returnString = ""

    if ((beginDate !== undefined) && (beginDate !== null)) {
        returnString += "begin_date=" + beginDate;
    }
    if ((endDate !== undefined) && (endDate !== null)) {
        if (returnString != "") {
            returnString += "&";
        }
        returnString += "end_date=" + endDate;
    }
    return returnString;
}

function buildQuery(searchTerm, beginDate, endDate) {
    var returnString = queryString;

    var searchQuery = "";
    var dateQuery = "";


    if (searchTerm !== null) {
        returnString  += "&" + apiSearchTerm(searchTerm);
    };
    if ((beginDate !== null) || (endDate !== null)) {
        returnString += "&" + apiDates(beginDate, endDate);
    };

    returnString += "&" + apiKey;
    return returnString;
}

var testQuery = buildQuery("election", "19900101", "20100101");
testQuery = testQuery.replace(/ /g, "+");

queryAPI(testQuery);

console.log(searchResults);


// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=gAE9qvl59oWORBff4NG2zgSXSHlBluIm"
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);
// });

//  **  Event Calls


//  **  Logic




// selects a random quote object from the quotes array & returns the randomly selected quote object
var getRandomQuote = function () {
    // gets a random number that's between 0 and the amount of objects (quotes) in the quotes array
    var randomNumber = Math.floor( Math.random() * quotes.length );
    return quotes[randomNumber];
}
// When called a new background color will be set to the body element ( * Extra Credit )
var setBgColor = function () {
    var bodyBg = document.body.style.backgroundColor;
    var r = Math.floor( Math.random() * 256 );
    var g = Math.floor( Math.random() * 256 );
    var b = Math.floor( Math.random() * 256 );
    return document.body.style.backgroundColor =  "rgb(" + r + "," + g + "," + b + ")";
}
// When called a random quote will be printed to the page
var printQuote = function () {
    // printQuote calls the getRandomQuote function and stores the returned quote object in a variable
    var quoteObject = getRandomQuote();
    var html;
    // printQuote constructs a string containing the different properties of the quote object
    html = '<p class="quote">' + quoteObject.quote + '</p>';
    html += '<p class="source">' + quoteObject.source;
    if (quoteObject.citation) {
        html += '<span class="citation">' + quoteObject.citation + '</span>';
    }
    if (quoteObject.year) {
        html += '<span class="citation">' + quoteObject.year + '</span>';
    }
    if (quoteObject.tags) {
        html += '<span class="tags">' + quoteObject.tags.join(', ') + '</span>';
    }
    html += '</p>';
    var print = document.getElementById('quote-box').innerHTML = html;

    setBgColor(); // side effect

    return print;
}
// selects a random quote object from the quotes array & returns the randomly selected quote object
function getRandomQuote() {
    // gets a random number that's between 0 and the amount of objects (quotes) in the quotes array
    var randomNumber = Math.floor( Math.random() * quotes.length );
    return quotes[randomNumber];
}

function printQuote() {
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
    html += '</p>';
    var print = document.getElementById('quote-box').innerHTML = html;
    return print;
}
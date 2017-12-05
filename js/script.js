var loadQuoteEl = document.getElementById('loadQuote');
// loads initial quote to the page
printQuote();
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
loadQuoteEl.addEventListener("click", printQuote, false);

// el.addEventListener("click", function() {
//     modifyText("four")
// }, false);
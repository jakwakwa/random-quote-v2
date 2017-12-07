var loadQuoteEl = document.getElementById('loadQuote');
// loads initial quote to the page
printQuote();
// loads quote every 10 seconds (* Extra Credit )
window.setInterval(function(){
    printQuote();
    setBgColor();
}, 10000);
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
loadQuoteEl.addEventListener("click", printQuote, false);
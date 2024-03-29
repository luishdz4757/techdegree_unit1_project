// List of quotes I gathered //


var quotes = [ {quote:"A man who stands for nothing will fall for Anything",
                source: "Malcolm X"},

               {quote:"We did not come to fear the future. We came here to shape it",
                source: "Barack Obama",
                citation: "C-Span",
                year: "2009"},

               {quote:"Imagination is more important than knowledge",
                source: "Albert Einstein"},

               {quote:"Don't count the days, make the days count",
               source:"Muhammad Ali"},
              
               {quote:"You have to be able to accept failure to get better",
               source:"Lebron James"},
              
               {quote:"An eye for an eye only ends up making the whole world blind",
               source:"Ghandi"}
                ];

console.log(quotes);

// This function randomly selects one of my quotes //

function getRandomQuote () {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes [randomNumber];
}
console.log(getRandomQuote);


// Gets random background color everytime //

function randomBackgroundColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(backgroundColor);

    document.body.style.background = backgroundColor;
    }

randomBackgroundColor();


// This will print out my quote and its source, citation, and year if it has one.//

function printQuote (){
  var randomQuote = getRandomQuote();
  var htmlString = '';
htmlString += '<p class="quote">' + randomQuote.quote + '</p>';
htmlString += '<p class="source">' + randomQuote.source;

if (randomQuote.citation){
htmlString += '<span class="citation">' + randomQuote.citation + '</span>'
}
if (randomQuote.year){
htmlString += '<span class="year">' + randomQuote.year + '</span>'
}
htmlString += '</p>';
randomBackgroundColor();
document.getElementById('quote-box').innerHTML = htmlString;
};

// This will print a new quote and get a new random color every 12 seconds//

setInterval(printQuote, 12000);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

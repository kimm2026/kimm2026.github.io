(function () {
  var quotes = [
    { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "It always seems impossible until it is done.", author: "Nelson Mandela" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B. B. King" }
  ];

  var textEl = document.getElementById("quote-text");
  var authorEl = document.getElementById("quote-author");
  var buttonEl = document.getElementById("quote-button");
  if (!textEl || !authorEl || !buttonEl) {
    return;
  }

  var dayIndex = new Date().getDate() % quotes.length;
  var currentIndex = dayIndex;

  function showQuote(index) {
    textEl.textContent = quotes[index].text;
    authorEl.textContent = quotes[index].author;
  }

  showQuote(currentIndex);

  buttonEl.addEventListener("click", function () {
    var next = currentIndex;
    while (next === currentIndex) {
      next = Math.floor(Math.random() * quotes.length);
    }
    currentIndex = next;
    showQuote(currentIndex);
  });
})();

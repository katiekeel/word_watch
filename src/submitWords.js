const $ = require('jQuery')

function submitWords() {
  $(document).ready(function() {
    $(":button").click(function(event) {
      event.preventDefault();
      getWordsFromBox();
    })
  })
}

function getWordsFromBox() {
  let text = $("textarea").val();
  parseText(text);
}

function parseText(text) {
  let wordString = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let words = wordString.split(/\s+/g);
  calculateWordFrequencies(words.sort())
}

function calculateWordFrequencies(words) {
  let wordsWithFrequencies = {};
  words.forEach(function(word) {
      if (!wordsWithFrequencies[word]) {
          wordsWithFrequencies[word] = 0;
      }
      wordsWithFrequencies[word] += 1;
  });
  sortWordsWithFrequencies(wordsWithFrequencies)
}

function sortWordsWithFrequencies(wordsWithFrequencies) {
  console.log(wordsWithFrequencies);
}

submitWords();

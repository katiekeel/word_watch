const $ = require('jQuery')

function submitWords() {
  $(document).ready(function() {
    $(":button").click(function(event) {
      event.preventDefault();
      clearDisplayedWords()
      getWordsFromBox();
    })
  })
}

function clearDisplayedWords() {
  $(".word-count").empty();
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
  let wordsWithFrequencies = {}
  words.forEach(function(word) {
      if (!wordsWithFrequencies[word]) {
        wordsWithFrequencies[word] = 0;
      }
      wordsWithFrequencies[word] += 1;
  })
  sortWordsByFrequency(wordsWithFrequencies)
}

function sortWordsByFrequency(words) {
  Object.keys(words).sort().forEach(function(key) {
    let value = words[key]
    delete words[key]
    words[key] = value
  })
  displaySubmittedWords(words)
}

function clearSubmittedWords() {

}

function displaySubmittedWords(words) {
  Object.keys(words).forEach(function(word) {
    $(".word-count").append(
      `<span font-size=${words['word']}em> ${word} </span><br/><br/>`
    )
  })
}

submitWords();

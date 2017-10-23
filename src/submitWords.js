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
  words = words.filter(function(item) {return !(item == "")});
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
  wordsToArray(wordsWithFrequencies)
}

function wordsToArray(words) {
  let wordsArray = []
  for(var key in words){ wordsArray.push({key: key, value: words[key]}) }
  displaySubmittedWords(wordsArray)
}

function displaySubmittedWords(wordsArray) {
  wordsArray.forEach(function(word) {
    $(".word-count").append(
      `<span style="font-size:${word.value}em">${word.key}&nbsp;</span>`
    )
  })
}

submitWords();

const $ = require('jQuery')

function submitWords() {
  $(document).ready(function() {
    $(":button").click(function(event) {
      event.preventDefault();
      let text = getWordsFromBox();
      findWordFrequency(text);
    })
  })
}

function getWordsFromBox() {
  let text = $("textarea").val();
  return text
}

function findWordFrequency(text) {
  parseText(text);

}

function parseText(text) {
  let wordString = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let words = wordString.split(/\s+/g);

  console.log(words)

  let sortedWords = words.sort();

  console.log(sortedWords)
}

submitWords();

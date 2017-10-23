const $ = require('jQuery')
const topWord = require('./topWord')

function getTopWord() {
  $(document).ready(function() {
    $.get("https://wordwatch-api.herokuapp.com/api/v1/top_word")
    .done(function(data) {
      topWord.displayTopWord(data);
    });
  });
}

function postWords(words) {
  words.forEach(function(newWord) {
    $.ajax({
      type: "POST",
      url: "https://wordwatch-api.herokuapp.com/api/v1/words",
      data: { word: { value: newWord.key } },
      success: function(data) {
        topWord.clearTopWord()
      }
    })
  })
  getTopWord();
}


getTopWord();

module.exports = {postWords}

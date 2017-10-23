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

getTopWord();

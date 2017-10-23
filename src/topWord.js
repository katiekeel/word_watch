const $ = require('jQuery')

function displayTopWord(data) {
  let wordWithFrequency = getWordAndFrequency(data);
  $('.top-word > h3').append(
    `<h5><span id="new-top-word">${wordWithFrequency.word}
    (${wordWithFrequency.frequency})
    </span></h5>`
  )
}

function getWordAndFrequency(data) {
  let word = Object.keys(data['word'])
  let frequency = data['word'][word]
  return {word, frequency}
}

function clearTopWord() {
  $('#new-top-word').remove()
}

module.exports = {displayTopWord, clearTopWord}

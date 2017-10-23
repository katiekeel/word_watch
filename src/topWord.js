const $ = require('jQuery')

function displayTopWord(data) {
  let wordWithFrequency = getWordAndFrequency(data);
  $('.top-word > h3').append(
    `${wordWithFrequency.word}
    (${wordWithFrequency.frequency})`
  )
}

function getWordAndFrequency(data) {
  let word = Object.keys(data['word'])
  let frequency = data['word'][word]
  return {word, frequency}
}

module.exports = {displayTopWord}

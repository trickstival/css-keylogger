const express = require('express')
const app = express()

function generateCssCode () {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return alphabet.map(letter => {
    return `input[value$=${letter}] { background-image: url(/char/${letter}); }`
  }).join('\n')
}

app.get('/', (req, res) => {
  res.send(`
    <style>
      ${generateCssCode()}
    </style>
    <input oninput="this.setAttribute('value', this.value)" type="text">
  `)
})

app.get('/char/:char', (req, res) => {
  console.log(req.params.char)
  res.send()
})

app.listen(2074, 'localhost', () => {
  console.log('Listening on', 2074)
})


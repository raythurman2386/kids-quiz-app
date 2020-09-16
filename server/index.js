const express = require('express')
const cors = require('cors')
const { generateQuestions } = require('./utils')

const port = 3333
const server = express()

server.use(express.json())
server.use(cors())

const sendUserError = (msg, res) => {
  res.status(422)
  res.json({ Error: msg })
  return
}

const shuffleArray = arr => [...arr].sort(() => Math.random() - 0.5)

server.get('/multiplication-tables', (req, res) => {
  let questions = generateQuestions(Math.floor(Math.random() * 10) + 1)
  const shuffledQuestions = shuffleArray(questions)
  res.json(shuffledQuestions)
})

server.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})

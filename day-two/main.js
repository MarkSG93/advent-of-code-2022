const inputToMeaning = {
  "A": "Boulder",
  "B": "Parchment",
  "C": "Shears",
  "X": "Boulder",
  "Y": "Parchment",
  "Z": "Shears"
}

const playPoints = {
  "Boulder": 1,
  "Parchment": 2,
  "Shears": 3
}

const resultPoints = {
  "Draw": 3,
  "Win": 6,
  "Loss": 0
}

const playByPlay = {
  "Boulder": { "Boulder": "Draw", "Parchment": "Loss", "Shears": "Win" },
  "Parchment": { "Boulder": "Win", "Parchment": "Draw", "Shears": "Loss" },
  "Shears": { "Boulder": "Loss", "Parchment": "Win", "Shears": "Draw" },
}

function rockPaperScissors(playerOne, playerTwo) {
  const playerOnePlay = inputToMeaning[playerOne];
  const playerTwoPlay = inputToMeaning[playerTwo];

  let result = playByPlay[playerTwoPlay][playerOnePlay];
  let playerTwoPoints = playPoints[playerTwoPlay];

  return playerTwoPoints + resultPoints[result];
}

module.exports = {
  rockPaperScissors
}
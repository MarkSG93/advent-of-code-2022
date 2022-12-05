const fs = require("fs");
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

function boulderParchmentShears(playerOne, playerTwo) {
  const playerOnePlay = inputToMeaning[playerOne];
  const playerTwoPlay = inputToMeaning[playerTwo];

  let result = playByPlay[playerTwoPlay][playerOnePlay];
  let playerTwoPoints = playPoints[playerTwoPlay];

  return playerTwoPoints + resultPoints[result];
}

const playByPlayPart2 = {
  "Boulder": { "Draw": "Boulder", "Win": "Parchment", "Loss": "Shears" },
  "Parchment": { "Draw": "Parchment", "Win": "Shears", "Loss": "Boulder" },
  "Shears": { "Draw": "Shears", "Win": "Boulder", "Loss": "Boulder" }
}

function boulderParchmentShearsPart2(playerOneInput, result) {
  const playerOnePlay = inputToMeaning[playerOneInput];
  const playerTwoPlay = playByPlayPart2[playerOnePlay][result];

  return playPoints[playerTwoPlay] + resultPoints[result];
}

function testStrategy(filename, part = 1) {
  const file = fs.readFileSync(filename, 'utf-8')
  const plays = file.split('\n');
  let total = 0;
  for (let play of plays) {
    const playerInputs = play.split(' ');
    if (part === 1) {
      total += boulderParchmentShears(playerInputs[0], playerInputs[1]);
    }

    if (part === 2) {
      total += boulderParchmentShearsPart2(playerInputs[0], playerInputs[1]);
    }
  }
  return total;
}

module.exports = {
  boulderParchmentShears,
  boulderParchmentShearsPart2,
  testStrategy
}
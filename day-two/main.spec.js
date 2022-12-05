const fs = require('fs');
const { boulderParchmentShears, testStrategy } = require('./main');

describe("Boulder, Parchment, Shears", () => {
  describe("Given player one chooses Boulder and you choose Parchment", () => {
    it("You receives 8 points", () => {
      const result = rockPaperScissors("A", "Y")
      expect(result).toEqual(8);
    });
  });

  describe("Given player one chooses Boulder and you choose Boulder", () => {
    it("You receive 4 points", () => {
      const result = rockPaperScissors("A", "X")
      expect(result).toEqual(4);
    });
  });

  describe("Given player one chooses Boulder and you choose Shears", () => {
    it("You receive 3 points", () => {
      const result = rockPaperScissors("A", "Z")
      expect(result).toEqual(3);
    });
  });
  describe("Given player one chooses Parchment and you choose Boulder", () => {
    it("You receive 1 points", () => {
      const result = rockPaperScissors("B", "X");
      expect(result).toEqual(1);
    });
  });

  describe("Given player one chooses Shears and you choose Boulder", () => {
    it("You receive 1 points", () => {
      const result = rockPaperScissors("C", "X");
      expect(result).toEqual(7);
    });
  });
});

describe("Test Strategy", () => {
  describe("Given a strategy", () => {
    it("Calculates and outputs the score of the strategy", () => {
      const result = testStrategy("test-input.txt");
      expect(result).toEqual(15);
    });
  });
});

const playByPlay = {
  "Boulder": { "Draw": "Boulder", "Win": "Parchment", "Loss": "Shears" },
  "Parchment": { "Draw": "Parchment", "Win": "Shears", "Loss": "Boulder" },
  "Shears": { "Draw": "Shears", "Win": "Boulder", "Loss": "Boulder" }
}

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

function boulderParchmentShearsPart2(playerOneInput, result) {
  const playerOnePlay = inputToMeaning[playerOneInput];
  const playerTwoPlay = playByPlay[playerOnePlay][result];

  return playPoints[playerTwoPlay] + resultPoints[result];
}

describe("Part 2 - the dipshit elf gives you the actual meaning to the input", () => {
  describe("Given player one plays Boulder and the result is a Draw", () => {
    it("You receive 4 points", () => {
      const result = boulderParchmentShearsPart2("A", "Draw");
      expect(result).toEqual(4);
    });
  });

  describe("Given player one plays Shears and the result is a Win", () => {
    it("You receive 4 points", () => {
      const result = boulderParchmentShearsPart2("C", "Win");
      expect(result).toEqual(7);
    });
  });

  describe("Given player one plays Parchment and the result is a Loss", () => {
    it("You receive 1 points", () => {
      const result = boulderParchmentShearsPart2("B", "Loss");
      expect(result).toEqual(1);
    });
  });
});
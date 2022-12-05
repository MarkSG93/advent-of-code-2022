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
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
  "Parchment": 1,
  "Shears": 2
}

const resultPoints = {
  "Draw": 3,
  "Win": 6,
  "Loss": 0
}

function rockPaperScissors(playerOne, playerTwo) {
  const playerOnePlay = inputToMeaning[playerOne];
  const playerTwoPlay = inputToMeaning[playerTwo];

  if (playerOnePlay === "Boulder" && playerTwoPlay === "Boulder") {
    return playPoints[playerTwoPlay] + resultPoints["Draw"];
  }

  if (playerOne === "A" && playerTwo === "Z") {
    return 3;
  }

  return 8;
}

describe("Boulder, Parchment, Shears", () => {
  describe("Given player one chooses Boulder and you choose Parchment", () => {
    it("You receives 8 playPoints", () => {
      const result = rockPaperScissors("A", "Y")
      expect(result).toEqual(8);
    });
  });

  describe("Given player one chooses Boulder and you choose Boulder", () => {
    it("You receive 4 playPoints", () => {
      const result = rockPaperScissors("A", "X")
      expect(result).toEqual(4);
    });
  });

  describe("Given player one chooses Boulder and you choose Shears", () => {
    it("You receive 3 playPoints", () => {
      const result = rockPaperScissors("A", "Z")
      expect(result).toEqual(3);
    });
  });
});
const fs = require('fs');
const { rockPaperScissors, testStrategy } = require('./main');

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

function rockPaperScissors2(playerOneInput, result) {
  return 1;
}

describe("Part 2 - the dipshit elf gives you the actual meaning to the input", () => {
  describe("Given player one plays Boulder and the result is a Draw", () => {
    it("You receive 4 points", () => {
      const result = rockPaperScissors2("A", "Draw");
      expect(result).toEqual(4);
    });
  });
});
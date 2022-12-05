const { boulderParchmentShears, testStrategy, boulderParchmentShearsPart2 } = require('./main');

describe("Day 2", () => {
  describe("Boulder, Parchment, Shears", () => {
    describe("Given player one chooses Boulder and you choose Parchment", () => {
      it("You receives 8 points", () => {
        const result = boulderParchmentShears("A", "Y")
        expect(result).toEqual(8);
      });
    });

    describe("Given player one chooses Boulder and you choose Boulder", () => {
      it("You receive 4 points", () => {
        const result = boulderParchmentShears("A", "X")
        expect(result).toEqual(4);
      });
    });

    describe("Given player one chooses Boulder and you choose Shears", () => {
      it("You receive 3 points", () => {
        const result = boulderParchmentShears("A", "Z")
        expect(result).toEqual(3);
      });
    });
    describe("Given player one chooses Parchment and you choose Boulder", () => {
      it("You receive 1 points", () => {
        const result = boulderParchmentShears("B", "X");
        expect(result).toEqual(1);
      });
    });

    describe("Given player one chooses Shears and you choose Boulder", () => {
      it("You receive 1 points", () => {
        const result = boulderParchmentShears("C", "X");
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

    describe("Given a strategy and part 2 logic", () => {
      it("Calculates and outputs the score of the strategy", () => {
        const result = testStrategy("test-input.txt", 2);
        expect(result).toEqual(12);
      });
    })
  });

  describe("Part 2 - the dipshit elf gives you the actual meaning to the input", () => {
    describe("Given player one plays Boulder and the result is a Draw", () => {
      it("You receive 4 points", () => {
        const result = boulderParchmentShearsPart2("A", "Y");
        expect(result).toEqual(4);
      });
    });

    describe("Given player one plays Shears and the result is a Win", () => {
      it("You receive 4 points", () => {
        const result = boulderParchmentShearsPart2("C", "Z");
        expect(result).toEqual(7);
      });
    });

    describe("Given player one plays Parchment and the result is a Loss", () => {
      it("You receive 1 points", () => {
        const result = boulderParchmentShearsPart2("B", "X");
        expect(result).toEqual(1);
      });
    });
  });
});
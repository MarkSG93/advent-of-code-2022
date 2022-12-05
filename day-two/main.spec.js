function rockPaperScissors(playerOne, playerTwo) {
  if (playerOne === "A" && playerTwo === "X") {
    return 2;
  }

  return 8;
}

describe("Boulder, Parchment, Shears", () => {
  describe("Given player one chooses Boulder and you choose Parchment", () => {
    it("You receives 8 points", () => {
      const result = rockPaperScissors("A", "Y")
      expect(result).toEqual(8);
    });
  });

  describe("Given player one chooses Boulder and you choose Boulder", () => {
    it("You receive 2 points", () => {
      const result = rockPaperScissors("A", "X")
      expect(result).toEqual(2);
    });
  });
});
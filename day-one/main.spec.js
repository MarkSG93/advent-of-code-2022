const { takeFoodFrom, findMyElves } = require('./main');

//elves: [][]number

describe.each([{ 
  elves: [[10, 20, 30], [1, 2, 3]], 
  fattestElf: 1,
  totalCalories: 60
}, { 
  elves: [[1, 2, 3], [10, 20, 30]], 
  fattestElf: 2,
  totalCalories: 60
}, {
  elves: [[10, 20, 30], [1, 2, 3], [100, 200, 300]],
  fattestElf: 3,
  totalCalories: 600
}])("There are a bunch elves carrying food: %j", ({ elves, fattestElf, totalCalories }) => {
  it(`returns the elf carrying the most calories: ${fattestElf}`, () => {
    const result = takeFoodFrom(elves);
    expect(result.fattestElf).toEqual(fattestElf);
    expect(result.totalCalories).toEqual(totalCalories);
  });
});


describe("Given a text file of elves", () => {
  it.each([
    {fileName: "test-input.txt", expected: [[1, 2, 3]]},
    {fileName: "test-input-2.txt", expected: [[1, 2, 3], [10, 20, 30]]}
  ])("Breaks each new line into an elf and the calories they are carrying", ({ fileName, expected }) => {
    const result = findMyElves(fileName);
    expect(result).toEqual(expected);
  });
});
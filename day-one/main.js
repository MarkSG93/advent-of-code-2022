const fs = require('fs');

function findMyElves(fileName) {
  const file = fs.readFileSync(fileName, 'utf-8');
  const foodItems = file.split('\n');
  const elves = [];
  let currentElf = 0;
  for (foodItem of foodItems) {
    if(!foodItem) {
      currentElf += 1
      continue;
    }
    
    if (!elves[currentElf]) {
      elves[currentElf] = [];
    }
    elves[currentElf].push(Number(foodItem));
  }

  return elves;
}

function takeFoodFrom(elves) {
  const totals = elves.map(elf => {
    let totalCalories = 0;
    for (foodItem of elf) {
      totalCalories += foodItem
    }
    return totalCalories
  });

  let fattestElf = 0;
  let fattestTotal = 0;

  for(let i = 0; i < totals.length; i++) {
    if (totals[i] > fattestTotal) {
      fattestElf = i + 1
      fattestTotal = totals[i]
    }
  }

  return { fattestElf, totalCalories: fattestTotal };
}

function imHungry(filename) {
  const elves = findMyElves(filename);
  console.log(takeFoodFrom(elves))
}

module.exports = {
  findMyElves,
  takeFoodFrom,
  imHungry
};
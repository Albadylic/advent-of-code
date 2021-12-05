let inputData = input.split("\n");

const calls = inputData.shift().split(",");

function generateGrids(arr) {
  let grids = [];
  let gridNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      gridNum++;
      grids.push([]);
    } else {
      grids[gridNum - 1].push(arr[i].split(" ").filter((item) => item !== ""));
    }
  }
  return grids;
}

const grids = generateGrids(inputData);

const checkForNum = (arr, num) => {
  arr.forEach((grid, ind) => {
    grid.forEach((row) => {
      if (row.includes(num)) {
        let index = row.indexOf(num);
        row[index] = "X";
      }
    });
  });
};

// Pass in a grid, checks each row to see if there are 5 Xs.
// Return true or false
const checkRow = (grid) => {
  let count = 0;

  for (let j = 0; j < grid.length; j++) {
    let row = grid[j];
    for (let i = 0; i < row.length; i++) {
      if (row[i] === "X") {
        count++;
        if (count === 5) {
          return true;
        }
      }
    }
    count = 0;
  }
  return false;
};

const checkColumn = (grid) => {
  let count = 0;

  let column = 0;
  let row = 0;

  while (column < grid.length) {
    while (row < 5) {
      if (grid[row][column] === "X") {
        count++;
      }
      row++;
    }
    if (count === 5) {
      return true;
    }
    column++;
    row = 0;
    count = 0;
  }
  return false;
};

// Currently, checkForNum checks for a specific num
// Eventually, call this for each num of the calls

// After each checkForNum, check each row and column of each grid
// The first grid must be found, so specific grids should be iterated
//  rather than all rows then all columns

// Using grids[3 to test]

checkForNum(grids, "32");
checkForNum(grids, "38");
checkForNum(grids, "56");
checkForNum(grids, "64");
checkForNum(grids, "88");

// For ref, the grid is this:
// 25  41  32  30  39
// 06  66  38  95  05
// 31  13  56  67  34
// 69  18  64  44  96
// 75  14  88  97  40

function checkGrids(array) {
  for (let i = 0; i < array.length; i++) {
    if (checkRow(array[i]) || checkColumn(array[i])) {
      return "found";
    }
  }
}

console.log(checkGrids(grids));

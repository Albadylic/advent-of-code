// Convert the input to a manageable format
let inputArray = input.split("\n").map(Number);

// Part one

const countBigger = (arr) => {
  return arr
    .map((number, index) => {
      return number > arr[index - 1];
    })
    .filter((item) => item === true).length;
};

let count = countBigger(inputArray);

// Part two

// Find a sum

function findSumOfGroup(initialIndex) {
  const group = [
    inputArray[initialIndex],
    inputArray[initialIndex + 1],
    inputArray[initialIndex + 2],
  ];
  return group.reduce((acc, cur) => (acc += cur));
}

// Iterate to find all the sums

let allSums = [];
for (let i = 0; i < inputArray.length; i++) {
  allSums.push(findSumOfGroup(i));
}

// Compare the windows

const groupCount = countBigger(allSums);

console.log(groupCount);

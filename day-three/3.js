// Split the set into entries; split each entry into characters; convert the characters to nums
// The conversion to nums could be avoided by checking the value of the string
// Instead we'll add up all the numbers, and check if it's more than half the number of total entries

let inputData = input.split("\n");

inputData = inputData.map((item) => item.split("").map((char) => Number(char)));

let gammaRate = [];
let epsilonRate = [];

// Count all first bits, then all 2nd bits, etc.

function calculateResult(arr) {
  // Length of one entry (num of bits)
  const bitLength = arr[0].join("").length;
  // Number of entries
  const dataLength = arr.length;
  // charIndex represents the current character (n)
  let charIndex = 0;

  while (charIndex < bitLength) {
    let count = 0;
    // Iterate through all the nth characters of the dataset
    for (let entryIndex = 0; entryIndex < dataLength; entryIndex++) {
      count += arr[entryIndex][charIndex];
    }

    // If the count is more than half of the number of values, 1 is the more common bit
    // Else, 0 is
    // [epsilonRate will always be an inverse of gammaRate]
    if (count > dataLength / 2) {
      gammaRate.push(1);
      epsilonRate.push(0);
    } else {
      gammaRate.push(0);
      epsilonRate.push(1);
    }

    charIndex++;
  }
  return parseInt(epsilonRate.join(""), 2) * parseInt(gammaRate.join(""), 2);
}

//console.log(calculateResult(inputData));

// Part 2

// Calulcate Oxy

// Iterate until only one number left
// Check the most common integer in the 1st position
// Filter out nums that do not start with this number
// Check the most common integer in the 2nd position
// Filter out nums that do not have the mode in 2 pos.
// etc.

// Same process but with least common for CO2

// If equal num of 1's and 0's:
// give 1 when looking for most common
// give 0 when looking for least common

let oxygenRating = [];
let carbonRating = [];

function lifeSupportRating(array) {
  // Length of one entry (num of bits)
  const bitLength = array[0].join("").length;

  // charIndex represents the current character (n)
  let charIndex = 0;

  // Copy array, to avoid mutating
  let oxyCopy = array;
  let carbonCopy = array;

  let mostCommon = 0;
  let leastCommon = 0;

  while (charIndex < bitLength) {
    let oxyCount = 0;
    let carbonCount = 0;
    let oxyLength = oxyCopy.length;
    let carbonLength = carbonCopy.length;

    for (let i = 0; i < oxyLength; i++) {
      oxyCount += oxyCopy[i][charIndex];
    }

    for (let i = 0; i < carbonCopy.length; i++) {
      carbonCount += carbonCopy[i][charIndex];
    }

    if (oxyCount >= oxyLength / 2) {
      mostCommon = 1;
    } else {
      mostCommon = 0;
    }

    if (carbonCount > carbonLength / 2) {
      leastCommon = 0;
    } else {
      leastCommon = 1;
    }

    if (oxyCopy.length > 1) {
      oxyCopy = oxyCopy.filter((item) => item[charIndex] === mostCommon);
    }

    if (carbonCopy.length > 1) {
      carbonCopy = carbonCopy.filter((item) => item[charIndex] === leastCommon);
    }

    charIndex++;
  }

  return parseInt(oxyCopy[0].join(""), 2) * parseInt(carbonCopy[0].join(""), 2);
}

console.log(lifeSupportRating(inputData));

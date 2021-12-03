// Split the set into entries; split each entry into characters; convert the characters to nums
// The conversion to nums could be avoided by checking the value of the string
// Instead we'll add up all the numbers, and check if it's more than half the number of total entries

const inputData = input.split("\n");

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

console.log(calculateResult(inputData));

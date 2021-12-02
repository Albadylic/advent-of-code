const inputData = input.split("\n");

const twoDArr = inputData
  .map((item) => item.split(" "))
  .map((arr) => [arr[0], Number(arr[1])]);

let horizontalPosition = 0;
let depth = 0;
let aim = 0;

function checkDirection(arr) {
  switch (arr[0]) {
    case "forward":
      horizontalPosition += arr[1];
      if (aim > 0) {
        depth += aim * arr[1];
      }
      break;
    case "up":
      aim -= arr[1];
      break;
    case "down":
      aim += arr[1];
      break;
  }
}

twoDArr.forEach((element) => {
  checkDirection(element);
});

console.log(horizontalPosition * depth);

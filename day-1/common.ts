const fileText = await Bun.file("./day-1/input.txt").text();
const fileTextParsed = fileText.split("\r\n");

const mutableListIdsLeft: number[] = [];
const mutableListIdsRight: number[] = [];

fileTextParsed.forEach((input) => {
  const inputParsed = input.split("   ");
  const num1 = parseInt(inputParsed[0]);
  const num2 = parseInt(inputParsed[1]);

  mutableListIdsLeft.push(num1);
  mutableListIdsRight.push(num2);
});

// Freeze the arrays to make them immutable
export const listIdsLeft = Object.freeze(mutableListIdsLeft);
export const listIdsRight = Object.freeze(mutableListIdsRight);

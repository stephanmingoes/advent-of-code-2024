import { puzzleGrid } from "./common";

export default function main() {
  const yLength = puzzleGrid.length;
  const xLength = puzzleGrid[0].length;

  let sum = 0;

  for (let i = 0; i < yLength; i++) {
    for (let j = 0; j < xLength; j++) {
      let letter = "A";

      if (puzzleGrid[i][j] !== letter) {
        continue;
      }

      // verify that coordinates that make up the x is valid

      let top = puzzleGrid[i - 1];
      let bottom = puzzleGrid[i + 1];

      if (top !== undefined && bottom !== undefined) {
        let topRight = top[j + 1];
        let topLeft = top[j - 1];
        let bottomRight = bottom[j + 1];
        let bottomLeft = bottom[j - 1];

        if (
          (topLeft === "M" &&
            topRight === "S" &&
            bottomLeft === "M" &&
            bottomRight === "S") ||
          (topLeft === "S" &&
            topRight === "M" &&
            bottomLeft === "S" &&
            bottomRight === "M") ||
          (topLeft === "S" &&
            topRight === "S" &&
            bottomLeft === "M" &&
            bottomRight === "M") ||
          (topLeft === "M" &&
            topRight === "M" &&
            bottomLeft === "S" &&
            bottomRight === "S")
        ) {
          sum += 1;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
  }
  return sum;
}

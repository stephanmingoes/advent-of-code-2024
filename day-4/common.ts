const fileText = await Object.freeze(Bun.file("./day-4/input.txt").text());

export const puzzleGrid = Object.freeze(
  fileText.split("\r\n").map((line) => line.split(""))
);

export function countHowManyTimesWordInPuzzle(word: string): number {
  const yLength = puzzleGrid.length;
  const xLength = puzzleGrid[0].length;

  let sum = 0;

  for (let i = 0; i < yLength; i++) {
    for (let j = 0; j < xLength; j++) {
      const firstLetter = puzzleGrid[i][j];

      if (firstLetter !== word[0]) {
        continue;
      }

      // while letter is available horizontally right and the letter is a valid next letter and it doesnt exceeds the word length
      let nextLetterPosition = 1;
      while (
        puzzleGrid[i][j + nextLetterPosition] !== undefined &&
        puzzleGrid[i][j + nextLetterPosition] === word[nextLetterPosition] &&
        nextLetterPosition < word.length
      ) {
        // simply add 1 to get next potential valid character
        nextLetterPosition += 1;
        if (nextLetterPosition === word.length) {
          // is a match
          sum += 1;
        }
      }

      // while letter is available horizontally left and the letter is a valid next letter and it doesnt exceeds the word length
      nextLetterPosition = 1;
      while (
        puzzleGrid[i][j + -nextLetterPosition] !== undefined &&
        puzzleGrid[i][j + -nextLetterPosition] === word[nextLetterPosition] &&
        nextLetterPosition < word.length
      ) {
        // simply add 1 to get next potential valid character
        nextLetterPosition += 1;
        if (nextLetterPosition === word.length) {
          // is a match
          sum += 1;
        }
      }

      // while letter is available verticall down and the letter is a valid letter and it doesnt exceeds the word length
      nextLetterPosition = 1;
      while (
        puzzleGrid[i + nextLetterPosition] !== undefined &&
        puzzleGrid[i + nextLetterPosition][j] !== undefined &&
        puzzleGrid[i + nextLetterPosition][j] === word[nextLetterPosition] &&
        nextLetterPosition < word.length
      ) {
        // simply add 1 to get next potential valid character
        nextLetterPosition += 1;
        if (nextLetterPosition === word.length) {
          // is a match
          sum += 1;
        }
      }

      // while letter is available verticall up and the letter is a valid letter and it doesnt exceeds the word length
      nextLetterPosition = 1;
      while (
        puzzleGrid[i + -nextLetterPosition] !== undefined &&
        puzzleGrid[i + -nextLetterPosition][j] !== undefined &&
        puzzleGrid[i + -nextLetterPosition][j] === word[nextLetterPosition] &&
        nextLetterPosition < word.length
      ) {
        // simply add 1 to get next potential valid character
        nextLetterPosition += 1;
        if (nextLetterPosition === word.length) {
          // is a match
          sum += 1;
        }
      }

      // while letter is available diagonally down right and the letter is a valid letter and it doesnt exceeds the word length
      nextLetterPosition = 1;

      while (
        puzzleGrid[i + nextLetterPosition] !== undefined &&
        puzzleGrid[i + nextLetterPosition][j + nextLetterPosition] !==
          undefined &&
        puzzleGrid[i + nextLetterPosition][j + nextLetterPosition] ===
          word[nextLetterPosition] &&
        nextLetterPosition < word.length
      ) {
        // simply add 1 to get next potential valid character
        nextLetterPosition += 1;
        if (nextLetterPosition === word.length) {
          // is a match
          sum += 1;
        }
      }

      // while letter is available diagonally up right and the letter is a valid letter and it doesnt exceeds the word length
      nextLetterPosition = 1;

      while (
        puzzleGrid[i + -nextLetterPosition] !== undefined &&
        puzzleGrid[i + -nextLetterPosition][j + nextLetterPosition] !==
          undefined &&
        puzzleGrid[i + -nextLetterPosition][j + nextLetterPosition] ===
          word[nextLetterPosition] &&
        nextLetterPosition < word.length
      ) {
        // simply add 1 to get next potential valid character
        nextLetterPosition += 1;
        if (nextLetterPosition === word.length) {
          // is a match
          sum += 1;
        }
      }

      // // while letter is available diagonally down left and the letter is a valid letter and it doesnt exceeds the word length
      nextLetterPosition = 1;

      while (
        puzzleGrid[i + nextLetterPosition] !== undefined &&
        puzzleGrid[i + nextLetterPosition][j + -nextLetterPosition] !==
          undefined &&
        puzzleGrid[i + nextLetterPosition][j + -nextLetterPosition] ===
          word[nextLetterPosition] &&
        nextLetterPosition < word.length
      ) {
        // simply add 1 to get next potential valid character
        nextLetterPosition += 1;
        if (nextLetterPosition === word.length) {
          // is a match
          sum += 1;
        }
      }
      //  while letter is available diagonally up left and the letter is a valid letter and it doesnt exceeds the word length
      nextLetterPosition = 1;

      while (
        puzzleGrid[i + -nextLetterPosition] !== undefined &&
        puzzleGrid[i + -nextLetterPosition][j + -nextLetterPosition] !==
          undefined &&
        puzzleGrid[i + -nextLetterPosition][j + -nextLetterPosition] ===
          word[nextLetterPosition] &&
        nextLetterPosition < word.length
      ) {
        // simply add 1 to get next potential valid character
        nextLetterPosition += 1;
        if (nextLetterPosition === word.length) {
          // is a match
          sum += 1;
        }
      }
    }
  }

  return sum;
}

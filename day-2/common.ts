const fileText = await Bun.file("./day-2/input.txt").text();

const fileTextParsed = fileText.split("\r\n");

export const input = Object.freeze(
  fileTextParsed.map((line) => line.split(" ").map((item) => parseInt(item)))
);

export function isSafe(
  report: number[],
  attempts: number,
  maxAttempts: number
): boolean {
  if (attempts >= maxAttempts) {
    return false;
  }

  const isIncreasing = report[0] < report[report.length - 1];
  for (let j = 0; j < report.length - 1; j++) {
    const level1 = report[j];
    const level2 = report[j + 1];

    const diff = isIncreasing ? level2 - level1 : level1 - level2;

    if (diff < 1 || diff > 3) {
      const newReport1 = report.filter((_, index) => index !== j);
      const newReport2 = report.filter((_, index) => index !== j + 1);

      return (
        isSafe(newReport1, attempts + 1, maxAttempts) ||
        isSafe(newReport2, attempts + 1, maxAttempts)
      );
    }
  }
  return true;
}

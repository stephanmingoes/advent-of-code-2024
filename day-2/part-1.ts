import { input, isSafe } from "./common";

export default function main() {
  let safeCount = 0;

  for (let i = 0; i < input.length; i++) {
    const report = input[i];

    if (isSafe(report, 0, 1)) {
      safeCount++;
    }
  }
  return safeCount;
}

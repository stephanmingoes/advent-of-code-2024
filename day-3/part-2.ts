import { fileText } from "./common";

export default function main() {
  const matches = fileText.match(/mul(\(\d+)(,)(\d+\))|don't\(\)|do\(\)/g);

  let doing = true;
  let sum = 0;

  for (const match of matches ?? []) {
    if (match === "do()") {
      doing = true;
      continue;
    }

    if (match === "don't()") {
      doing = false;
      continue;
    }

    if (doing) {
      const [a, b] = match
        .replace(/mul\(|\)/g, "")
        .split(",")
        .map((n) => parseInt(n));
      sum += a * b;
    }
  }

  return sum;
}

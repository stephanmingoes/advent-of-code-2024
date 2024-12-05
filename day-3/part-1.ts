import { fileText } from "./common";

export default function main() {
  const matches = fileText.match(/mul(\(\d+)(,)(\d+\))/g);

  let sum = 0;

  matches?.forEach((match) => {
    const [a, b] = match
      .replace(/mul\(|\)/g, "")
      .split(",")
      .map((n) => parseInt(n));
    sum += a * b;
  });
  return sum;
}

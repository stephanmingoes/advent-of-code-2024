import { entries, rules } from "./common";

export default function main() {
  let sum = 0;

  for (let i = 0; i < entries.length; i++) {
    const trackedEntries = new Set<number>();

    inner: for (let j = 0; j < entries[i].length; j++) {
      // if theres an intersection between track entries and rules[entries[i][i]] break as row is now invalid

      trackedEntries.add(entries[i][j]);

      if (trackedEntries.intersection(rules[entries[i][j]]).size > 0) {
        console.log("here", j);
        break inner;
      }

      if (j === entries[i].length - 1) {
        // finished validating row

        const middleNum = entries[i][Math.floor(entries[i].length / 2)];

        sum += middleNum;
      }
    }
  }

  return sum;
}

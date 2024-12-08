import { entries, rules } from "./common";

export default function main() {
  let sum = 0;

  for (let i = 0; i < entries.length; i++) {
    const trackedEntries = new Set<number>();

    inner: for (let j = 0; j < entries[i].length; j++) {
      // if theres an intersection between track entries and rules[entries[i][i]] break as row is now invalid

      trackedEntries.add(entries[i][j]);

      const rule = rules[entries[i][j]];

      if (rule) {
        if (trackedEntries.intersection(rule).size > 0) {
          break inner;
        }
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

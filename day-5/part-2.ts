import { entries, rules } from "./common";

export default function main() {
  let sum = 0;

  for (let i = 0; i < entries.length; i++) {
    const trackedEntries = new Set<number>();

    inner: for (let j = 0; j < entries[i].length; j++) {
      trackedEntries.add(entries[i][j]);

      const rule = rules[entries[i][j]];

      if (rule) {
        //   invalid row
        if (trackedEntries.intersection(rule).size > 0) {
          // sort then add middle number to sum

          entries[i].sort((a, b) => {
            const rule = rules[a];

            if (!rule) {
              return -1;
            }

            if (rule.has(b)) {
              return -1;
            } else {
              return 1;
            }
          });

          const middleNum = entries[i][Math.floor(entries[i].length / 2)];

          sum += middleNum;
          break inner;
        }
      }
    }
  }

  return sum;
}

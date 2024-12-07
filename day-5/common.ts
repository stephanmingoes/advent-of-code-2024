const fileText = await Bun.file("day-5/input.txt").text();

const filTextSplit = fileText.split("\r\n\r\n");

function generateRules(): Record<number, Set<number>> {
  const rules: Record<number, Set<number>> = {};

  filTextSplit[0].split("\r\n").forEach((rule) => {
    const ruleSplit = rule.split("|");
    const num1 = parseInt(ruleSplit[0]);
    const num2 = parseInt(ruleSplit[1]);

    if (Object.hasOwn(rules, num1)) {
      rules[num1].add(num2);
    } else {
      rules[num1] = new Set();
    }
  });

  return rules;
}

function getEntries(): number[][] {
  return filTextSplit[1].split("\r\n").map((line) => {
    const lineSplit = line.split(",");

    return lineSplit.map((item) => parseInt(item));
  });
}

export const rules = Object.freeze(generateRules());
export const entries = Object.freeze(getEntries());

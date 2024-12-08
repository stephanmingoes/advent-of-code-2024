const fileText = await Bun.file("day-6/input.txt").text();

export const grid = fileText.split("\r\n").map((line) => line.split(""));

export type Postion = "up" | "down" | "left" | "right";
function getStartingPositionAndDirection():
  | { x: number; y: number; direction: Postion }
  | undefined {
  for (let x = 0; x < grid.length; x++) {
    const row = grid[x];
    for (let y = 0; y < row.length; y++) {
      const item = row[y];
      switch (item) {
        case "^":
          return { x, y, direction: "up" };
        case "v":
          return { x, y, direction: "down" };
        case "<":
          return { x, y, direction: "left" };
        case ">":
          return { x, y, direction: "right" };
      }
    }
  }
}

export const startingPostition = getStartingPositionAndDirection();

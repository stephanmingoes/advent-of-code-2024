import {
  grid,
  startingPostition as startingPostitionAndDirection,
} from "./common";

export default function main() {
  const { direction, x, y } = startingPostitionAndDirection!;

  let activePosition = { x, y };
  let activeDirection = direction;
  let visited = new Set<string>();

  // while x and  y still in grid

  let nextPositon;
  u: while (
    activePosition.x >= 0 &&
    activePosition.x < grid.length &&
    activePosition.y >= 0 &&
    activePosition.y < grid[0].length
  ) {
    s: switch (activeDirection) {
      case "up":
        nextPositon = { x: activePosition.x - 1, y: activePosition.y };
        break s;
      case "down":
        nextPositon = { x: activePosition.x + 1, y: activePosition.y };
        break s;
      case "left":
        nextPositon = { x: activePosition.x, y: activePosition.y - 1 };
        break s;
      case "right":
        nextPositon = { x: activePosition.x, y: activePosition.y + 1 };
        break s;
    }

    if (grid[nextPositon.x] && grid[nextPositon.x][nextPositon.y] === "#") {
      t: switch (activeDirection) {
        case "up":
          activeDirection = "right";
          break t;
        case "down":
          activeDirection = "left";
          break t;
        case "left":
          activeDirection = "up";
          break t;
        case "right":
          activeDirection = "down";
          break t;
      }

      continue;
    } else {
      visited.add(activePosition.x + "-" + activePosition.y);
      activePosition.x = nextPositon.x;
      activePosition.y = nextPositon.y;
    }
  }
  return visited.size;
}

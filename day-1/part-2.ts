import { listIdsRight, listIdsLeft } from "./common";

export default function main() {
  const groupedRightListIds = Object.groupBy(listIdsRight, (i) => i);
  let sum = 0;
  listIdsLeft.forEach((id) => {
    const frequency = groupedRightListIds[id]?.length ?? 0;
    sum += id * frequency;
  });

  return sum;
}

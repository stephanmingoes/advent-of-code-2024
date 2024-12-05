import { listIdsLeft, listIdsRight } from "./common";

export default function main() {
  const listIdsLeft_ = [...listIdsLeft];
  const listIdsRight_ = [...listIdsRight];
  let listLength = listIdsLeft_.length;
  let sum = 0;

  while (listLength > 0) {
    const leftSmallest = getSmallestNumber(listIdsLeft_);
    const rightSmallest = getSmallestNumber(listIdsRight_);

    sum += Math.abs(leftSmallest.num - rightSmallest.num);

    listIdsLeft_.splice(leftSmallest.index, 1);
    listIdsRight_.splice(rightSmallest.index, 1);

    listLength--;
  }

  return sum;
}

function getSmallestNumber(nums: number[]): { num: number; index: number } {
  let num = Infinity;
  let num_index = -1;

  nums.forEach((item, index) => {
    if (item < num) {
      num = item;
      num_index = index;
    }
  });

  return { index: num_index, num };
}

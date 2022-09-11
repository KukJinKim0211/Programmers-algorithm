function solution(nums) {
  const map = new Map();
  for (num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  return nums.length / 2 < map.size ? nums.length / 2 : map.size;
}

console.log(solution([3, 3, 3, 2, 2, 2]));

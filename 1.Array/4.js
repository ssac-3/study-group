let a = [0, 0, 0, 1, 2, 2, 2, 3];
function deduplication(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let cnt = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) cnt += 1;
  }
  return cnt;
}
console.log(deduplication(a));

// a = new Set(a);
// a = [...a];

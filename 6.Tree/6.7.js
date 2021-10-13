const solution = (arr) => {
  const newArr = [...new Set(arr)];

    return newArr.length > 2
      ? newArr.sort((a, b) => a - b)[2]
      : newArr.sort((a, b) => b - a)[newArr.length - 1];
};

console.log(solution([32, 5, 64, 12, 765, 23, 4, 5]));

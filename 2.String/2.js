function solution(numbers, hand) {
  var answer = '';
  let leftPosition = 0;
  let rightPosition = 0;

  for (let number of numbers) {
    if (number === 0) number = 11;
    if (number === 1 || number === 4 || number === 7) {
      answer = answer + 'L';
      leftPosition = number;
    } else if (number === 3 || number === 6 || number === 9) {
      answer = answer + 'R';
      rightPosition = number;
    } else {
      if (
        Math.abs(number - leftPosition) === Math.abs(number - rightPosition)
      ) {
        if (hand === 'left') answer = answer + 'L';
        else answer = answer + 'R';
      } else {
        if (
          Math.abs(
            Math.abs(number - leftPosition) - Math.abs(number - rightPosition)
          ) < 3
        ) {
          if (hand === 'left') answer = answer + 'L';
          else answer = answer + 'R';
        } else if (
          Math.abs(number - leftPosition) > Math.abs(number - rightPosition)
        ) {
          answer = answer + 'R';
        } else {
          answer = answer + 'L';
        }
      }
    }
  }
  return answer;
}

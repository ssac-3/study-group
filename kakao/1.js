function solution(s) {
  var answer = '';
  let tempStr = '';

  const table = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      tempStr += s[i];
      if (table[tempStr]) {
        answer += table[tempStr];
        tempStr = '';
      }
    } else {
      answer += s[i];
    }
  }
  return Number(answer);
}
console.log(solution('23four5six7'));

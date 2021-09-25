'use strict';

const MONEY = 15;
const COIN = [1, 2, 4];
const ANSWER = [];

const checkLastMoney = (money, coin) => {
  let temp = money;
  let count = 0;
  coin.sort(function (a, b) {
    return b - a;
  });

  while (temp > 0) {
    while (temp - coin[count] >= 0) {
      temp -= coin[count];
      ANSWER.push(coin[count]);
    }
    count++;
  }
};
checkLastMoney(MONEY, COIN);

console.log(ANSWER);

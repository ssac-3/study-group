'use strict';

const a = [1, 4, 5];
const b = [2, 3, 7];

const c = [...a, ...b].sort();

console.log(c);

# 5. 큐(Queue)

## 목차


[1. 큐의 이해](#1)

[2. 큐 연습](#2)

---

## 1. 큐의 이해<a id="1"></a>
- FIFO (First In First Out) : 선입선출의 구조
- Enqueue : 큐에 데이터 추가하는 연산
- Dequeue : 큐에서 데이터를 꺼내는 연산

```js
class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    return this._arr.shift();
  }
}
```
---

## 2. 큐 연습<a id="2"></a>

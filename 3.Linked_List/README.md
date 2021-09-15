# 1. 연결 리스트(Linked List)

## 목차

[1. 연결 리스트의 이해](#1)

[2. 연결 리스트 연산](#2)

[3. 연결 리스트 문제](#3)

[4. 연결 리스트 뒤집기](#4)

[5. 순환 검출(Cycle Detection)](#5)

[6. 두 수 더하기](#6)

---

## 1. 연결 리스트의 이해<a id="1"></a>

---

## 2. 연결 리스트 연산<a id="2"></a>

---

## 3. 연결 리스트 문제<a id="3"></a>

---

## 4. 연결 리스트 뒤집기<a id="4"></a>

```
function Node(value) {
  return { value: value, next: null };
}
const reverseLinkedList = function (node) {
  let head = node;
  let tail = null;
  while (head) {
    let swap = head.next;
    head.next = tail;
    tail = head;
    head = swap;
  }

  return tail;
};

let root = Node('10');
let nodeB = (root.next = Node('11'));
let nodeC = (nodeB.next = Node('12'));
let nodeD = (nodeC.next = Node('13'));

let newRoot = reverseLinkedList(root);
console.log(newRoot.next);

```

---

## 5. 순환 검출(Cycle Detection)<a id="5"></a>

```
'use strict';

function Node(value) {
  return { value: value, next: null };
}
const checkCycle = function (node) {
  let head = node;
  let nodeSet = new Set();

  while (head) {
    if (nodeSet.has(head)) {
      return true;
    }
    nodeSet.add(head);
    head = head.next;
  }

  return false;
};

let root = Node('1');
let nodeB = (root.next = Node('2'));
let nodeC = (nodeB.next = Node('3'));
nodeC.next = root;

let root2 = Node('1');

let root3 = Node('1');
let nodeE = (root3.next = Node('2'));
let nodeF = (nodeE.next = Node('3'));
let nodeG = (nodeF.next = Node('4'));
let nodeH = (nodeG.next = Node('5'));
let nodeI = (nodeH.next = Node('6'));

console.log(checkCycle(root));
console.log(checkCycle(root2));
console.log(checkCycle(root3));

```

---

## 6. 두 수 더하기<a id="6"></a>

'use strict';

function Node(value) {
  return { value: value, next: null };
}

const checkCycle = function (node) {
  let head = node;
  let nodeSet = new Set();

  while (head !== null) {
    if (nodeSet.has(head)) {
      // head가 set에 있으면
      return true;
    }
    // set에 head 추가
    nodeSet.add(head);
    head = head.next;
  }

  return false;
};

let root = Node('10');
let nodeB = (root.next = Node('11'));
let nodeC = (nodeB.next = Node('12'));
let nodeD = (nodeC.next = Node('13'));

let root2 = Node('5');
let nodeE = (root2.next = Node('11'));
let nodeF = (nodeE.next = Node('12'));
let nodeG = (nodeF.next = Node('13'));
nodeG.next = nodeF;

console.log(checkCycle(root));
console.log(checkCycle(root2));

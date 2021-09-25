'use strict';

function Node(value) {
  return { value: value, next: null };
}

const checkCycle = function (node) {
  let head = node;
  let nodeSet = new Set();

  //FIXME: node의 value가 들어가는게 아니라 node 자체가 들어간다.
  while (head) {
    if (nodeSet.has(head)) {
      return true; // 순환링크드리스트
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

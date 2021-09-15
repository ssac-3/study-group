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

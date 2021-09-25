'use strict';

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.push = function (data) {
  const newNode = new Node(data);
  let cursor;

  if (!this.head) {
    this.head = newNode;
    this.length++;
    return;
  }

  cursor = this.head;
  while (cursor.next) {
    cursor = cursor.next;
  }

  cursor.next = newNode;
  this.length++;
};

LinkedList.prototype.reverseList = function () {
  let cursor = this.head;
  let nextNode;
  let previousNode = null;

  while (cursor) {
    nextNode = cursor.next;
    cursor.next = previousNode;
    previousNode = cursor;
    cursor = nextNode;
  }

  this.head = previousNode;
};

const sumTwoLinkedList = (list1, list2) => {
  let head1 = list1.head;
  let head2 = list2.head;
  const linkedList = new LinkedList();

  console.log(head1, head2);

  while (head1 || head2) {
    if (head1 && head2) {
      linkedList.push(head1.data + head2.data);
    } else if (head1) {
      linkedList.push(head1.data);
    } else {
      linkedList.push(head2.data);
    }
    head1 = head1.next;
    head2 = head2.next;
  }
  return linkedList;
};

const linkedListOne = new LinkedList();
linkedListOne.push(1);
linkedListOne.push(2);
linkedListOne.push(3);

const linkedListTwo = new LinkedList();
linkedListTwo.push(4);
linkedListTwo.push(5);
linkedListTwo.push(6);

sumTwoLinkedList(linkedListOne, linkedListTwo);

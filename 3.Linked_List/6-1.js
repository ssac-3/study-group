function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.pushBack = function (data) {
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

LinkedList.prototype.traverse = function () {
  let temp = this.head;

  while (temp) {
    console.log(temp);
    temp = temp.next;
  }
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
  let tempHap;

  const linkedList = new LinkedList();

  //   console.log(head1, head2);

  while (head1 || head2) {
    if (head1 && head2) {
      linkedList.pushBack(head1.data + head2.data);
    } else if (head1) {
      linkedList.pushBack(head1.data);
    } else {
      linkedList.pushBack(head2.data);
    }
    head1 = head1.next;
    head2 = head2.next;
  }
  console.log(linkedList);
};

const linkedListOne = new LinkedList();
linkedListOne.pushBack(7);
linkedListOne.pushBack(8);
linkedListOne.pushBack(2);
const linkedListTwo = new LinkedList();
linkedListOne.pushBack(2);
linkedListOne.pushBack(1);
linkedListTwo.reverseList();

sumTwoLinkedList(linkedListOne.reverseList(), linkedListTwo.reverseList());

class Node {
  constructor(data, left = null, right = null) {
    this.data = data; // 다른 노드와 차별점을 두는 데이터
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (!node) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  BFS(fn) {
    // 인자로 callback 함수를 받는다.
    if (this.root === null) return;

    const unvisitedQueue = [this.root];
    while (unvisitedQueue.length !== 0) {
      const current = unvisitedQueue.shift(); // dequeue
      unvisitedQueue.push(...current.children); // 현재 부모 노드의 자식들을 모두 다 큐에 담는다.
      fn(current); // 현재 노드를 가지고 callback 함수 실행
    }
  }
  DFS(fn) {
    if (this.root === null) return;

    const unvisitedList = [this.root];
    while (unvisitedList.length !== 0) {
      const current = unvisitedList.shift();
      unvisitedList.unshift(...current.children); // list 앞에다 넣어준다. (우선순위: 내 자식들이 먼저야! )
      fn(current);
    }
  }
  findHap(fn) {
    if (this.root === null) return;

    const unvisitedList = [this.root];
    while (unvisitedList.length !== 0) {
      const current = unvisitedList.shift();
      unvisitedList.unshift(...current.children); // list 앞에다 넣어준다. (우선순위: 내 자식들이 먼저야! )
      fn(current);
    }
  }
  swap() {
    if (this.root === null) return;
    const stack = [this.root];
    while (stack.length !== 0) {
      const node = stack.pop();

      const left = node.left;
      node.left = node.right;
      node.right = left;

      if (node.left !== null) {
        stack.push(node.left);
      }
      if (node.right !== null) {
        stack.push(node.right);
      }
    }
  }
  checkBinaryTree() {
    if (this.root === null) return false;
    const stack = [this.root];
    while (stack.length !== 0) {
      const node = stack.pop();

      const left = node.left.data ?? 0;
      const right = node.right.data ?? 0;

      if (!(left < node.data && node.data < right)) {
        return false;
      }

      if (node.left !== null) {
        stack.push(node.left);
      }
      if (node.right !== null) {
        stack.push(node.right);
      }
    }
    return true;
  }
}

const t = new Tree();
t.root = new Node(14);
t.root.left=
console.log(t);
console.log(t.checkBinaryTree());

class Node {
  constructor(data) {
    this.data = data; // 다른 노드와 차별점을 두는 데이터
    this.children = []; // 자식들과의 정보(주소)를 담을 배열
  }

  add(data) {
    this.children.push(new Node(data)); // 자식 노드를 생성하고 바로 배열에 저장한다. (주소를 저장하는 행위)
  }

  remove(data) {
    // 자식의 정보를 지우는 메소드
    this.children = this.children.filter((child) =>
      child.data === data ? false : true
    ); // filter 를 거쳐서 해당하는 자식의 정보를 배열에서 빼주면 된다.
  }
}

class Tree {
  constructor() {
    this.root = null;
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
}

const lettersBFS = [];
const lettersDFS = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('d');
t.root.children[0].add('c');

t.BFS((node) => lettersBFS.push(node.data));
t.DFS((node) => lettersDFS.push(node.data));

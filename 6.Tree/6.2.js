// Binary Tree

function Node(data, left = null, right = null) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  BinarySearchTree.prototype.add = function (data) {
    const node = this.root;
    if (node === null) {
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
  };

  BinarySearchTree.prototype.remove = function (data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  };
  BinarySearchTree.prototype.find = function (data) {
    const node = this.root;
    if (node === null) return false;
    else if (node.data === data) return true;
    else {
      const findTree = function (node) {
        if (node?.data > data) {
          return findTree(node.left);
        } else if (node?.data < data) {
          return findTree(node.right);
        } else if (node?.data === data) {
          return true;
        } else {
          return false;
        }
      };
      return findTree(node);
    }
  };
  BinarySearchTree.prototype.BFS = function () {
    let node = this.root;
    const queue = [node];
    const finalData = [];

    while (queue.length) {
      node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      finalData.push(node.data);
    }
    return finalData;
  };
  BinarySearchTree.prototype.DFS = function () {};
}

const tree = new BinarySearchTree();
tree.add(10);
tree.add(5);
tree.add(14);
tree.add(12);
tree.add(17);
tree.add(20);
tree.add(3);
console.log(tree.BFS());

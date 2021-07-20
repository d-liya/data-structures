type BinarySearchTreeNodeType = BinarySearchTreeNode | undefined | null;
class BinarySearchTreeNode {
  data: number = 0;
  left: BinarySearchTreeNodeType;
  right: BinarySearchTreeNodeType;
  constructor(data: number) {
    this.data = data;
    this.left = undefined;
    this.right = undefined;
  }
}
class BinarySearchTree {
  root: BinarySearchTreeNodeType;
  constructor() {
    this.root = null;
  }

  add(data: number) {
    if (this.root == null) {
      this.root = new BinarySearchTreeNode(data);
    } else {
      this.addNode(this.root, data);
    }
  }
  addNode(node: BinarySearchTreeNode, data: number) {
    if (data <= node.data) {
      if (node.left == null) {
        node.left = new BinarySearchTreeNode(data);
      } else {
        this.addNode(node.left, data);
      }
    } else {
      if (node.right == null) {
        node.right = new BinarySearchTreeNode(data);
      } else {
        this.addNode(node.right, data);
      }
    }
  }

  delete(data: number) {
    if (this.root == null) {
      return "The Tree is Empty";
    } else {
      this.deleteNode(this.root, data);
    }
  }

  deleteNode(node: BinarySearchTreeNodeType, data: number) {
    if (node == null) {
      return;
    }
    if (data == node.data) {
      if (node.left == null && node.right == null) {
        node = null;
      } else if (node.left == null) {
        node = node.right;
      } else if (node.right == null) {
        node = node.left;
      } else {
        let tempNode: BinarySearchTreeNode = this.getMinNode(node.right);
        node.data = tempNode.data;
        node.right = this.deleteNode(node.right, tempNode.data);
      }
    } else if (data < node.data) {
      node.left = this.deleteNode(node.left, data);
    } else {
      node.right = this.deleteNode(node.right, data);
    }
    return node;
  }

  public getMinNode(node: BinarySearchTreeNode): BinarySearchTreeNode {
    if (node.left == null) {
      return node;
    } else {
      return this.getMinNode(node.left);
    }
  }

  preorder(node: BinarySearchTreeNodeType) {
    if (node != null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  inorder(node: BinarySearchTreeNodeType) {
    if (node != null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  postorder(node: BinarySearchTreeNodeType) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  levelorder(node: BinarySearchTreeNodeType) {
    if (node != null) {
      let queue = [node];
      while (queue.length > 0) {
        let currentNode = queue.shift();
        if (currentNode != null) {
          console.log(currentNode.data);
          if (currentNode.left != null) {
            queue.push(currentNode.left);
          }
          if (currentNode.right != null) {
            queue.push(currentNode.right);
          }
        }
      }
    }
  }
}

export { BinarySearchTreeNode, BinarySearchTree };

### Templating language Demos

LinkedList
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)
node1.next(node2)
node2.next(node3)
node3.next(node4)

DoublyLinkedList
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)
node1.next(node2)
node2.prev(node1)
node2.next(node3)
node3.prev(node2)
node3.next(node4)
node4.prev(node3)

BinaryTree
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)
node1.left(node2)
node1.right(node3)
node2.right(node4)

BinarySearchTree
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)
node2.left(node1)
node2.right(node3)
node3.right(node4)

Stack
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.push(1)

Queue
queue = Queue()
queue.add(1)
queue.add(2)
queue.add(3)
queue.remove()
queue.add(5)

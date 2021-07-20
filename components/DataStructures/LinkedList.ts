class SinglyNode {
  data = null;
  next: SinglyNode | null | undefined = null;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: SinglyNode | undefined | null = null;
  size = 0;
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  add(data: any) {
    const node = new SinglyNode(data);
    let temp: SinglyNode | null;
    if (this.head == null) {
      this.head = node;
    } else {
      temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = node;
    }
    this.size++;
  }

  insertAt(element: any, index: number) {
    if (index < 0 || index > this.size)
      return `${index} is not a valid index. Index should be between 0-${this.size}. Please enter a valid index.`;
    else {
      const node = new SinglyNode(element);
      let curr, prev: SinglyNode | undefined | null;

      curr = this.head;
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;
        while (it < index && curr?.next) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        // @ts-ignore
        prev.next = node;
      }
      this.size++;
    }
    return "";
  }

  removeForm(index: number) {
    if (index < 0 || index > this.size)
      return `${index} is not a valid index. Index should be between 0-${this.size}. Please enter a valid index.`;
    else {
      let it = 0;
      let curr = this.head;
      let prev = curr;
      if (index === 0) {
        this.head = curr?.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr?.next;
        }
        if (prev) prev.next = curr?.next;
      }
      this.size--;
    }
    return "";
  }
}

class DoublyNode {
  data = null;
  next: DoublyNode | null | undefined = null;
  prev: DoublyNode | null | undefined = null;
  constructor(data: any) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: DoublyNode | null | undefined = null;
  tail: DoublyNode | null = null;
  size = 0;
  constructor(head = null) {
    this.head = head;
    this.size = 0;
    this.tail = null;
  }

  add(data: any) {
    const newNode = new DoublyNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  insertAt(element: any, index: number) {
    if (this.size === 0) return "List is empty use add().";
    if (index < 0 || index > this.size)
      return `${index} is not a valid index. Index should be between 0-${this.size}. Please enter a valid index.`;
    else {
      const node = new DoublyNode(element);
      if (index === 0 && this.head) {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      } else if (index === this.size) {
        this.add(element);
        return "";
      } else {
        let it = 0;
        let curr = this.head;
        while (it < index && curr?.next) {
          curr = curr.next;
          it++;
        }
        node.prev = curr?.prev;
        curr.prev.next = node;
        node.next = curr;
      }
      this.size++;
    }
    return "";
  }

  removeForm(index: number) {
    if (this.size === 0) return "List is empty add some nodes before removing";
    if (index < 0 || index > this.size)
      return `${index} is not a valid index. Index should be between 0-${this.size}. Please enter a valid index.`;
    else {
      let it = 0;
      let curr = this.head;
      if (index === 0 && curr?.next) {
        this.head = curr.next;
        this.head.prev = null;
      } else {
        while (it < index && curr?.next) {
          curr = curr.next;
          it++;
        }
        if (curr?.prev) {
          let prev = curr.prev;
          let next = curr.next;
          prev.next = next;
          if (next) next.prev = prev;
        }
      }
      if (index === this.size - 1) {
        const newTail = this.tail?.prev;
        if (newTail) {
          newTail.next = null;
          this.tail = newTail;
        }
      }
      this.size--;
    }
    return "";
  }
}

export { LinkedList, DoublyLinkedList };

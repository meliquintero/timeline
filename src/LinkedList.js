class ListNode {
  constructor(item) {
    this.item = item === undefined ? null : item;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(item) {
    let newNode = new ListNode(item);
    if (!this.head) {
      this.head = newNode;
      return true
    } else if (this.head.item.start > newNode.item.end) {
      newNode.next = this.head
      this.head = newNode;
      return true
    }

    let current = this.head;
    let prev = this.head;

    while (current) {
      if (current.item.end < newNode.item.start && !current.next) {
        current.next = newNode;
        return true;
      } else if (prev.item.end < newNode.item.start && newNode.item.end < current.item.start) {
        prev.next = newNode;
        newNode.next = current;
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false
  }
}

export default LinkedList

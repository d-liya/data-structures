import { DoublyLinkedList, LinkedList } from "../DataStructures/LinkedList";

export const generateLinkedList = (classInstance: LinkedList) => {
  const elements = [];
  let curr = classInstance.head;
  let i = 0;
  const random = new Date().getTime();
  while (curr) {
    elements.push({
      id: `${i + random}`,
      data: { label: curr.data },
      position: { x: 50, y: 80 * i },
    });
    if (curr.next) {
      elements.push({
        id: `e${i + random} - ${i + random + 1}`,
        source: `${i + random}`,
        target: `${i + random + 1}`,
        arrowHeadType: "arrowclosed",
      });
    }
    i++;
    curr = curr.next;
  }

  return elements;
};

export const generateDoublyLinkedList = (classInstance: DoublyLinkedList) => {
  const elements = [];
  let curr = classInstance.head;
  let i = 0;
  const random = new Date().getTime();
  while (curr) {
    elements.push({
      id: `${i + random}`,
      data: { label: curr.data, handles: "both" },
      position: { x: 50, y: 80 * i },
      type: "withHandle",
    });
    if (curr.next) {
      elements.push({
        id: `e${i + random} - ${i + random + 1}`,
        source: `${i + random}`,
        target: `${i + random + 1}`,
        arrowHeadType: "arrowclosed",
      });
      elements.push({
        id: `e${i + random + 1} - ${i + random}`,
        target: `${i + random}`,
        source: `${i + random + 1}`,
        arrowHeadType: "arrowclosed",
      });
    }
    i++;
    curr = curr.next;
  }
  return elements;
};

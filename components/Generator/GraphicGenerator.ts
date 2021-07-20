import { DoublyLinkedList, LinkedList } from "../DataStructures/LinkedList";
import { Queue } from "../DataStructures/Queue";
import { Stack } from "../DataStructures/Stack";
import { generateDoublyLinkedList, generateLinkedList } from "./LinkedList";
import { generateQueue } from "./Queue";
import { generateStack } from "./Stack";

export const useGraphicGenerator = () => {
  return (classInstance: any) => {
    if (classInstance instanceof LinkedList) {
      return generateLinkedList(classInstance);
    } else if (classInstance instanceof DoublyLinkedList) {
      return generateDoublyLinkedList(classInstance);
    } else if (classInstance instanceof Stack) {
      return generateStack(classInstance);
    } else if (classInstance instanceof Queue) {
      return generateQueue(classInstance);
    }
  };
};

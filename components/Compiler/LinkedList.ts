import { DoublyLinkedList, LinkedList } from "../DataStructures/LinkedList";
import { getArguments, PARENTHESES } from "./Compiler";

const methods = ["add", "insertAt", "removeFrom"];

export const LinkedListGenerator = (
  codeBlock: string,
  classInstance: LinkedList | DoublyLinkedList,
  i: number
) => {
  let { method, match } = getArguments(codeBlock, methods);
  if (method === methods[0]) {
    if (match && match[1].trim()) {
      classInstance.add(match[1].trim());
    } else {
      return `Line ${i}: Invalid argument.`;
    }
  } else if (method === methods[1]) {
    if (match && match[1]) {
      const element = match[1].split(",");
      if (element.length > 1 && parseInt(element[1])) {
        const messege = classInstance.insertAt(
          element[0].trim(),
          parseInt(element[1].trim())
        );
        if (messege) {
          return `Line ${i}: ` + messege;
        }
      } else {
        return `Line ${i}: insertAt should have two arg (data,index)`;
      }
    }
  } else if (method === methods[2]) {
    if (match && parseInt(match[1]) > -1) {
      const messege = classInstance.removeForm(parseInt(match[1]));
      if (messege) {
        return `Line ${i}: ` + messege;
      }
    } else {
      return `Line ${i}: Invalid argument.`;
    }
  }

  return "";
};

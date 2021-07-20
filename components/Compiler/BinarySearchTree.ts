import { BinarySearchTree } from "../DataStructures/BinarySearchTree";
import { getArguments } from "./Compiler";

const methods = ["add", "delete"];

export const BinarySearchTreeGenerator = (
  codeBlock: string,
  classInstance: BinarySearchTree,
  i: number
) => {
  let { method, match } = getArguments(codeBlock, methods);
  if (method === methods[0]) {
    if (match && match[1].trim()) {
      classInstance.add(parseInt(match[1].trim()));
    } else {
      return `Line ${i}: Invalid argument.`;
    }
  } else if (method === methods[1]) {
    if (match && match[1].trim()) {
      const messege = classInstance.delete(parseInt(match[1].trim()));
      if (messege) {
        return `Line ${i}: ` + messege;
      }
    } else {
      return `Line ${i}: Invalid argument.`;
    }
  }
  return "";
};

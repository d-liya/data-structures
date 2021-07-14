import { Queue } from "../DataStructures/Queue";
import { getArguments } from "./Compiler";

const methods = ["enqueue", "dequeue"];
export const QueueGenerator = (
  codeBlock: string,
  classInstance: Queue,
  i: number
) => {
  let { match, method } = getArguments(codeBlock, methods);
  if (method === methods[0]) {
    if (match && match[1].trim()) {
      classInstance.enqueue(match[1].trim());
    } else {
      return `Line ${i}: Invalid argument.`;
    }
  } else if (method === methods[1]) {
    const messege = classInstance.dequeue();
    if (messege) return messege;
  }
  return "";
};

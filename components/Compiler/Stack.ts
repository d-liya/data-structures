import { Stack } from "../DataStructures/Stack";
import { getArguments } from "./Compiler";

const methods = ["push", "pop"];
export const StackGenerator = (
  codeBlock: string,
  classInstance: Stack,
  i: number
) => {
  let { match, method } = getArguments(codeBlock, methods);
  if (method === methods[0]) {
    if (match && match[1].trim()) {
      classInstance.push(match[1].trim());
    } else {
      return `Line ${i}: Invalid argument.`;
    }
  } else if (method === methods[1]) {
    const messege = classInstance.pop();
    if (messege) return messege;
  }
  return "";
};

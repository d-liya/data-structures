import { Stack } from "../DataStructures/Stack";

export const generateStack = (classInstance: Stack) => {
  const random = new Date().getTime();

  return classInstance.stack.map((el, i) => ({
    id: `${i + random}`,
    data: { label: el },
    position: { x: 50, y: 50 * i },
    connectable: false,
    type: "noHandle",
    draggable: false,
  }));
};

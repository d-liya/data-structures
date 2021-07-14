import { Queue } from "../DataStructures/Queue";

export const generateQueue = (classInstance: Queue) => {
  const random = new Date().getTime();

  return classInstance.queue.map((el, i) => ({
    id: `${i + random}`,
    data: { label: el },
    position: { x: 50, y: 50 * i },
    connectable: false,
    type: "noHandle",
    draggable: false,
  }));
};

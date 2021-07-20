import { useCallback, useMemo, useState } from "react";
import { DoublyLinkedList, LinkedList } from "../DataStructures/LinkedList";
import { Status } from "../../types";
import { useAppDispatch } from "../../redux/hooks";
import {
  changeRunTimeStatus,
  changeStatusMessege,
} from "../../redux/CompilerSlice";
import { LinkedListGenerator } from "./LinkedList";
import { Stack } from "../DataStructures/Stack";
import { Queue } from "../DataStructures/Queue";
import { StackGenerator } from "./Stack";
import { QueueGenerator } from "./Queue";
import { BinarySearchTree } from "../DataStructures/BinarySearchTree";
import { BinarySearchTreeGenerator } from "./BinarySearchTree";
const DATATYPES = [
  "LINKEDLIST",
  "DOUBLYLINKEDLIST",
  "STACK",
  "QUEUE",
  "BINARYSEARCHTREE",
];
export const PARENTHESES = /\(([^)]+)\)/;
export const useCompiler = () => {
  const dispatch = useAppDispatch();
  const setErrorMessege = (messege: string) => {
    dispatch(changeRunTimeStatus("ERROR"));
    dispatch(changeStatusMessege(messege));
  };
  const complie = (code: string) => {
    dispatch(changeRunTimeStatus("IDLE"));
    dispatch(changeStatusMessege(""));

    const codeBlocks = code.replace(/\n/g, "").split(";");

    if (!DATATYPES.find((el) => el === codeBlocks[0].toUpperCase())) {
      setErrorMessege("Missing the data structure name or semi colons.");
      return "";
    }
    let classInstance;
    for (let i = 0; i < codeBlocks.length; i++) {
      let codeBlock = codeBlocks[i];
      let errorMessege = "";
      if (i === 0) {
        classInstance = init(codeBlock);
        continue;
      }

      if (
        classInstance instanceof LinkedList ||
        classInstance instanceof DoublyLinkedList
      ) {
        errorMessege = LinkedListGenerator(codeBlock, classInstance, i);
      } else if (classInstance instanceof Stack) {
        errorMessege = StackGenerator(codeBlock, classInstance, i);
      } else if (classInstance instanceof Queue) {
        errorMessege = QueueGenerator(codeBlock, classInstance, i);
      } else if (classInstance instanceof BinarySearchTree) {
        errorMessege = BinarySearchTreeGenerator(codeBlock, classInstance, i);
      }

      if (errorMessege) {
        setErrorMessege(errorMessege);
        return "";
      }
    }

    dispatch(changeRunTimeStatus("SUCCEESED"));

    return classInstance;
  };
  return complie;
};

const init = (codeBlock: string) => {
  switch (codeBlock.toUpperCase()) {
    case DATATYPES[0]:
      return new LinkedList();
    case DATATYPES[1]:
      return new DoublyLinkedList();
    case DATATYPES[2]:
      return new Stack();
    case DATATYPES[3]:
      return new Queue();
    case DATATYPES[4]:
      return new BinarySearchTree();
    default:
      return null;
  }
};

export const getArguments = (codeBlock: string, methodNames: Array<string>) => {
  let obj: {
    method: string | null;
    match: string[] | RegExpExecArray | null;
  } = {
    method: null,
    match: [""],
  };
  methodNames.map((methodName) => {
    if (codeBlock.includes(methodName)) {
      return (obj = {
        method: methodName,
        match: PARENTHESES.exec(codeBlock),
      });
    }
  });

  return obj;
};

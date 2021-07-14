import { AiFillFileAdd, AiOutlinePlus } from "react-icons/ai";
import { useSpring, animated } from "react-spring";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FileNameInput } from "../common/Input";

export default function FileExplorerTab() {
  const editor = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();
  const styles = useSpring({
    width: editor.openTab ? 200 : 0,
    opacity: editor.openTab ? 1 : 0,
  });

  return (
    <animated.ul className="mt-3" style={styles}>
      <span className="text-white text-sm m-1 p-1">Examples</span>
      <section className="flex flex-col">
        <FileNameInput value="LinkedList Example" disabled />
        <FileNameInput value="DoublyLinkedList Example" disabled />
        <FileNameInput value="BinaryTree Example" disabled />
        <FileNameInput value="BinarySearchTree Example" disabled />
        <FileNameInput value="Stack Example" disabled />
        <FileNameInput value="Queue Example" disabled />
      </section>
    </animated.ul>
  );
}

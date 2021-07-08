import { AiFillFileAdd, AiOutlinePlus } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function FileExplorerTab() {
  const editor = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  return (
    <>
      <ul className="explorer-tab">
        <span className="tab-header">
          <span>
            <AiFillFileAdd style={{ marginRight: 10 }} /> New File
          </span>{" "}
          <AiOutlinePlus style={{ cursor: "pointer" }} />
        </span>
        {editor.files.length > 0 && editor.files.map((el) => <input value={el} key={el} />)}
        <input value="LinkedList Example" disabled />
        <input value="DoublyLinkedList Example" disabled />
        <input value="BinaryTree Example" disabled />
        <input value="BinarySearchTree Example" disabled />
        <input value="Stack Example" disabled />
        <input value="Queue Example" disabled />
      </ul>
    </>
  );
}

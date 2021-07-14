import FileExplorerTab from "./FileExplorerTab";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeOpenTab } from "../../redux/EditorSlice";
import { BsFilePlus, BsFileEarmarkCode } from "react-icons/bs";

export default function FileExplorer() {
  const open = useAppSelector((state) => state.editor.openTab);
  const dispatch = useAppDispatch();
  return (
    <div className="flex">
      <section className="flex flex-col items-center">
        <BsFileEarmarkCode
          size={25}
          color={open === "examples" ? "rgb(94, 92, 230)" : ""}
          onClick={() => dispatch(changeOpenTab("examples"))}
          className="mt-3 mx-2 text-white hover:text-purple cursor-pointer"
        />
        <BsFilePlus
          size={25}
          color={open === "explorer" ? "rgb(94, 92, 230)" : ""}
          onClick={() => dispatch(changeOpenTab("explorer"))}
          className="mt-3 mx-2 text-white hover:text-purple cursor-pointer"
        />
      </section>
      <FileExplorerTab />
    </div>
  );
}

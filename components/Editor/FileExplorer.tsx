import UseAnimations from "react-useanimations";
import menu4 from "react-useanimations/lib/menu4";
import FileExplorerTab from "./FileExplorerTab";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeOpenTab } from "../../redux/EditorSlice";

export default function FileExplorer() {
  const open = useAppSelector((state) => state.editor.openTab);
  const dispatch = useAppDispatch();
  return (
    <div style={{ display: "flex" }}>
      <UseAnimations
        onClick={() => dispatch(changeOpenTab())}
        animation={menu4}
        reverse={open}
        size={50}
        wrapperStyle={{ cursor: "pointer", zIndex: 10 }}
      />
      <section className="file-explorer-side-bar">
        <FileExplorerTab />
      </section>
    </div>
  );
}

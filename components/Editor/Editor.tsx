import FileExplorer from "./FileExplorer";
import PreviewSection from "./PreviewSection";
import TextEditor from "./TextEditor";

export default function Editor() {
  return (
    <div className="editor">
      <FileExplorer />
      <TextEditor />
      <PreviewSection />
    </div>
  );
}

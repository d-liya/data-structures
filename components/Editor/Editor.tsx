import FileExplorer from "./FileExplorer";
import PreviewSection from "./PreviewSection";
import TextEditor from "./TextEditor";

export default function Editor() {
  return (
    <div className="bg-black rounded-xl flex m-6 mt-0 flex-1">
      <div className="flex w-1/2">
        <FileExplorer />
        <TextEditor />
      </div>
      <PreviewSection />
    </div>
  );
}

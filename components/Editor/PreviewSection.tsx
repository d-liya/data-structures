import { useAppSelector } from "../../redux/hooks";
import ReactFlow from "react-flow-renderer";
import NodeWithOutHandle from "../Nodes/NodeWithOutHandle";
import NodeWithHandle from "../Nodes/NodeWithHandle";

const customNodes = {
  noHandle: NodeWithOutHandle,
  withHandle: NodeWithHandle,
};

export default function PreviewSection() {
  const { compiler } = useAppSelector((state) => state);

  return (
    <div className="flex flex-1 pt-5">
      {compiler.elements && compiler.elements.length > 0 && (
        <ReactFlow elements={compiler.elements} nodeTypes={customNodes} />
      )}
    </div>
  );
}

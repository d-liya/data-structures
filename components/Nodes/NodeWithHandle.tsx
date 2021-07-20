import { memo } from "react";
import { Handle } from "react-flow-renderer";

function NodeWithHandle({
  data,
}: {
  data: { label: string; handles: "top" | "bottom" | "both" };
}) {
  return (
    <div className="py-2 px-5 bg-white rounded-md">
      {(data.handles === "both" || data.handles === "top") && (
        <>
          <Handle type="target" position="top" id="a" />
          <Handle type="source" position="top" style={{ left: "35%" }} id="a" />
        </>
      )}
      <div>{data.label}</div>
      {(data.handles === "both" || data.handles === "bottom") && (
        <>
          <Handle type="source" position="bottom" id="a" />
          <Handle
            type="target"
            position="bottom"
            style={{ left: "35%" }}
            id="a"
          />
        </>
      )}
    </div>
  );
}
export default memo(NodeWithHandle);

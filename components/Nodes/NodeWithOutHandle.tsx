import { memo } from "react";
function NodeWithOutHandle({ data }: { data: { label: string } }) {
  return (
    <div className="py-2 px-5 bg-white rounded-md">
      <div>{data.label}</div>
    </div>
  );
}

export default memo(NodeWithOutHandle);

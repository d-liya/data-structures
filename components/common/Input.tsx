import { InputHTMLAttributes } from "react";

export const FileNameInput = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="text-tintWhite bg-black border-none text-xs font-semibold p-1 m-1 cursor-pointer"
  />
);

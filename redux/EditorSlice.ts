import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type Tabs = "explorer" | "examples" | null;

interface EditorSlice {
  textValue: string;
  openTab: Tabs;
  play: boolean;
  files: Array<String>;
}

const initialState: EditorSlice = {
  textValue: "Stack;\npush(2);\npush(2);\npush(1);",
  openTab: null,
  play: false,
  files: [],
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    changeOpenTab: (state, action: PayloadAction<Tabs>) => {
      return {
        ...state,
        openTab: state.openTab !== action.payload ? action.payload : null,
      };
    },
    changeTextValue: (state, action: PayloadAction<string>) => {
      return { ...state, textValue: action.payload };
    },
    changePlay: (state) => {
      return { ...state, play: !state.play };
    },
    addNewFile: (state, action: PayloadAction<string>) => {
      return { ...state, files: [...state.files, action.payload] };
    },
    renameFile: (
      state,
      action: PayloadAction<{ old: string; new: string }>
    ) => {
      const index = state.files.indexOf(action.payload.old);
      return {
        ...state,
        files: [
          ...state.files.slice(0, index),
          action.payload.new,
          ...state.files.slice(index + 1),
        ],
      };
    },
    removeFileByName: (state, action: PayloadAction<string>) => {
      state.files = state.files.filter((str) => str != action.payload);
    },
  },
});

export const {
  changeOpenTab,
  changeTextValue,
  changePlay,
  addNewFile,
  removeFileByName,
  renameFile,
} = editorSlice.actions;

export default editorSlice.reducer;

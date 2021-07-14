import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type Tabs = "explorer" | "examples" | null;

// Define a type for the slice state
interface EditorSlice {
  textValue: string;
  openTab: Tabs;
  play: boolean;
  files: Array<String>;
}

// Define the initial state using that type
const initialState: EditorSlice = {
  textValue: "Stack;\npush(2);\npush(2);\npush(1);",
  openTab: null,
  play: false,
  files: [],
};

export const editorSlice = createSlice({
  name: "editor",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeOpenTab: (state, action: PayloadAction<Tabs>) => {
      state.openTab = state.openTab !== action.payload ? action.payload : null;
    },
    changeTextValue: (state, action: PayloadAction<string>) => {
      state.textValue = action.payload;
    },
    changePlay: (state) => {
      state.play = !state.play;
    },
    addNewFile: (state, action: PayloadAction<string>) => {
      state.files = [...state.files, action.payload];
    },
    renameFile: (
      state,
      action: PayloadAction<{ old: string; new: string }>
    ) => {
      state.files = state.files.map((str) => {
        if (action.payload.old === str) {
          return action.payload.new;
        }
        return str;
      });
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

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default editorSlice.reducer;

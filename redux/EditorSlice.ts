import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface EditorSlice {
  textValue: string;
  openTab: boolean;
  play: boolean;
  files: Array<String>;
}

// Define the initial state using that type
const initialState: EditorSlice = {
  textValue: "Type Here",
  openTab: false,
  play: false,
  files: [],
};

export const editorSlice = createSlice({
  name: "editor",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeOpenTab: (state) => {
      state.openTab = !state.openTab;
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
    renameFile: (state, action: PayloadAction<{ old: string; new: string }>) => {
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

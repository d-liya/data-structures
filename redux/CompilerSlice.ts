import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../types";
interface CompilerSlice {
  runTimeStatus: Status;
  statusMessege: string;
  elements: Array<any>;
}
const initialState: CompilerSlice = {
  runTimeStatus: "IDLE",
  statusMessege: "",
  elements: [],
};

export const ccmpilerSlice = createSlice({
  name: "generator",
  initialState,
  reducers: {
    changeRunTimeStatus: (state, action: PayloadAction<Status>) => {
      state.runTimeStatus = action.payload;
    },
    changeStatusMessege: (state, action: PayloadAction<string>) => {
      state.statusMessege = action.payload;
    },
    changeElements: (state, action: PayloadAction<Array<any>>) => {
      state.elements = action.payload;
    },
  },
});

export const { changeRunTimeStatus, changeStatusMessege, changeElements } =
  ccmpilerSlice.actions;

export default ccmpilerSlice.reducer;

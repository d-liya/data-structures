import { configureStore } from "@reduxjs/toolkit";
import editor from "./EditorSlice";
import compiler from "./CompilerSlice";

const store = configureStore({
  reducer: {
    editor,
    compiler,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

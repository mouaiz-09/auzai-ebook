import { configureStore } from "@reduxjs/toolkit";
import get from "../features/GetData";
export const Store = configureStore({
  reducer: {
    FtechMain: get,
  },
});

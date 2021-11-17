import { configureStore } from "@reduxjs/toolkit";
import mainDataReducer from "./slice/MainDataSlice";

export default configureStore({
  reducer: {
    mainData: mainDataReducer,
  },
});

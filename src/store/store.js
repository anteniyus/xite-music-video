import { configureStore } from "@reduxjs/toolkit";
import mainDataReducer from "./slice/VideoSlice";

export default configureStore({
  reducer: {
    mainData: mainDataReducer,
  },
});

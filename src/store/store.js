import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./slice/VideoSlice";

export default configureStore({
  reducer: {
    videos: videoReducer,
  },
});

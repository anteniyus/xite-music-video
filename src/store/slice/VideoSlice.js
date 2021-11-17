import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetVideos } from "../../containers/Video/Services/VideoService";

export const getVideos = createAsyncThunk("videos", () => GetVideos());

const videoSlice = createSlice({
  name: "mainData",
  initialState: {
    mainData: {},
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getVideos.pending]: (state) => {
      state.mainData = {};
      state.isLoading = true;
      state.error = null;
    },
    [getVideos.fulfilled]: (state, action) => {
      state.mainData = action.payload;
      state.isLoading = false;
    },
    [getVideos.rejected]: (state, action) => {
      state.mainData = {};
      state.isLoading = false;
      state.error = action.error?.message;
    },
  },
});

export default videoSlice.reducer;

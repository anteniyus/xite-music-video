import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetVideos } from "../../containers/Video/Services/VideoService";

export const getVideos = createAsyncThunk("videos", () => GetVideos());
const limit = 12;

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    genres: [],
    data: [],
    currentData: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    updateVideos(state, action) {
      state.currentData = state.data.slice(
        action.payload.offset * limit,
        (action.payload.offset + 1) * limit
      );
    },
  },
  extraReducers: {
    [getVideos.pending]: (state) => {
      state.genres = [];
      state.data = [];
      state.currentData = [];
      state.isLoading = true;
      state.error = null;
    },
    [getVideos.fulfilled]: (state, action) => {
      state.genres = action.payload.genres;
      state.data = action.payload.videos;
      state.currentData = action.payload.videos.slice(0, limit);
      state.isLoading = false;
    },
    [getVideos.rejected]: (state, action) => {
      state.genres = [];
      state.data = [];
      state.currentData = [];
      state.isLoading = false;
      state.error = action.error?.message;
    },
  },
});

export const { updateVideos } = videoSlice.actions;

export default videoSlice.reducer;

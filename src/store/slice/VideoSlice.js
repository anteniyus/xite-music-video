import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetVideos } from "../../containers/Video/Services/VideoService";

export const getVideos = createAsyncThunk("videos", () => GetVideos());

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    genres: [],
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getVideos.pending]: (state) => {
      state.genres = [];
      state.data = [];
      state.isLoading = true;
      state.error = null;
    },
    [getVideos.fulfilled]: (state, action) => {
      state.genres = action.payload.genres;
      state.data = action.payload.videos;
      state.isLoading = false;
    },
    [getVideos.rejected]: (state, action) => {
      state.genres = [];
      state.data = [];
      state.isLoading = false;
      state.error = action.error?.message;
    },
  },
});

export default videoSlice.reducer;

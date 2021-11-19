import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetVideos } from "../../containers/Video/Services/VideoService";

const limit = 12;

export const getVideos = createAsyncThunk("videos", () => GetVideos());

const getFilteredData = (data, genres, years, query) =>
  data.filter((item) => {
    if (query) {
      const regex = new RegExp(`${query}`, "i");
      if (!regex.test(item.artist) && !regex.test(item.title)) return false;
    }

    if (genres?.length > 0 && genres.indexOf(item.genre_id) === -1)
      return false;

    return !(years?.length > 0 && years.indexOf(item.release_year) === -1);
  });

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    genres: [],

    data: [],
    filteredData: [],
    currentData: [],

    page: 1,

    isLoading: false,
    error: null,
  },
  reducers: {
    updateVideos(state, action) {
      const result = getFilteredData(
        state.data,
        action.payload.genres,
        action.payload.years,
        action.payload.query
      );

      state.filteredData = result;
      state.currentData = result.slice(0, limit);

      state.page = 1;
    },
    updateCurrentDataByOffset(state, action) {
      state.currentData = state.filteredData.slice(
        action.payload.offset * limit,
        (action.payload.offset + 1) * limit
      );

      state.page = action.payload.offset + 1;
    },
  },
  extraReducers: {
    [getVideos.pending]: (state) => {
      state.genres = [];

      state.data = [];
      state.filteredData = [];
      state.currentData = [];

      state.page = 1;

      state.isLoading = true;
      state.error = null;
    },
    [getVideos.fulfilled]: (state, action) => {
      state.genres = action.payload.genres;

      state.data = action.payload.videos;
      state.filteredData = action.payload.videos;
      state.currentData = action.payload.videos.slice(0, limit);

      state.isLoading = false;
    },
    [getVideos.rejected]: (state, action) => {
      state.genres = [];

      state.data = [];
      state.filteredData = [];
      state.currentData = [];

      state.page = 1;

      state.isLoading = false;
      state.error = action.error?.message;
    },
  },
});

export const { updateVideos, updateCurrentDataByOffset } = videoSlice.actions;

export default videoSlice.reducer;

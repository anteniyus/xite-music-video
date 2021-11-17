import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMainData = createAsyncThunk("mainData", () => getMainData());

const mainDataSlice = createSlice({
  name: "mainData",
  initialState: {
    mainData: {},
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getMainData.pending]: (state) => {
      state.mainData = {};
      state.isLoading = true;
      state.error = null;
    },
    [getMainData.fulfilled]: (state, action) => {
      state.mainData = action.payload;
      state.isLoading = false;
    },
    [getMainData.rejected]: (state, action) => {
      state.mainData = {};
      state.isLoading = false;
      state.error = action.error?.message;
    },
  },
});

export default mainDataSlice.reducer;

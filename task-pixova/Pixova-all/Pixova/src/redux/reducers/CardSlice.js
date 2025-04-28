import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getProductThunk = createAsyncThunk("/get/cards", async () => {
  const res = await axios.get("http://localhost:5000/people");
  return res.data;
});

const cardSlice = createSlice({
  name: "cards",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export default cardSlice.reducer;

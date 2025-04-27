import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk("/get/products", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

export const postProduct = createAsyncThunk(
  "products/postProduct",
  async (newProduct) => {
    const res = await axios.post("https://fakestoreapi.com/products", newProduct);
    return res.data; 
  }
);
const carSlice = createSlice({
  name: "products",
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
      })

      .addCase(postProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
      })
      .addCase(postProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default carSlice.reducer;

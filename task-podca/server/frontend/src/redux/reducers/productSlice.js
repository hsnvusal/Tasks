import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await axios.get("http://localhost:5000/products");
    return res.data;
  }
);

export const deleteProducts = createAsyncThunk(
    "products/deleteProducts",
    async (id) => {
      await axios.delete(`http://localhost:5000/products/${id}`);
      return id; 
    }
  );

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [], // ✅ array olmalıdır
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

      builder
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item._id !== action.payload);
      });
  },
});

export default productSlice.reducer;

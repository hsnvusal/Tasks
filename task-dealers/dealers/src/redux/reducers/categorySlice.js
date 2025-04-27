import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://northwind.vercel.app/api/categories";

export const fetchCategories = createAsyncThunk("categories/fetch", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const createCategory = createAsyncThunk("categories/create", async (newCategory) => {
  const res = await axios.post(API_URL, newCategory);
  return res.data;
});

export const updateCategory = createAsyncThunk("categories/update", async ({ id, updatedCategory }) => {
  const res = await axios.put(`${API_URL}/${id}`, updatedCategory);
  return res.data;
});

export const deleteCategory = createAsyncThunk("categories/delete", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(createCategory.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })

      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.data.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })

      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.data = state.data.filter(item => item.id !== action.payload);
      });
  }
});

export default categorySlice.reducer;

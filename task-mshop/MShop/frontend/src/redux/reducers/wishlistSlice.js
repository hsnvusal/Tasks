import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      state.items.push({ ...item });

      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },

    removeFromWishlist : (state,action) => {
        state.items = state.items.filter(x=>x._id !==action.payload);
        localStorage.setItem("wishlist",JSON.stringify(state.items))
    }
  },
});


export const {addToWishlist,removeFromWishlist}= wishlistSlice.actions;

export default wishlistSlice.reducer;

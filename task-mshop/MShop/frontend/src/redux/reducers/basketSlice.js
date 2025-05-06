import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:JSON.parse(localStorage.getItem("basket")) || []
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket:(state,action)=> {
            const item = action.payload;
            const existingItem = state.items.find(x=>x._id === item._id)
            if (existingItem) {
                existingItem.quantity +=1;
            } else {
                state.items.push({...item,quantity:1})
            }

            localStorage.setItem("basket",JSON.stringify(state.items));
        },
        removeFromBasket : (state,action) => {
            state.items= state.items.filter(x=>x._id !==action.payload);
            localStorage.setItem("basket",JSON.stringify(state.items))
        },
        clearBasket:(state) => {
            state.items = [];
            localStorage.removeItem("basket");
        }
        }
});

export const {addToBasket,removeFromBasket,clearBasket} = basketSlice.actions;
export default basketSlice.reducer;
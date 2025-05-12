import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("products/getProduct",async ()=> {
    const res = await axios.get("http://localhost:5000/products");
    return res.data;
})
export const deleteProduct = createAsyncThunk("products/deleteProduct",async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    return id;
})

const productSlice = createSlice({
    name:"products",
    initialState : {
        items:[],
        status :"idle",
        error:null
    },
    reducers : {},
    extraReducers : (builder) =>{
        builder 
        .addCase(getProduct.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(getProduct.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.items = action.payload
        })
        .addCase(getProduct.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error.message
        })

        builder 
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.items = state.items.filter((item)=>item._id !== action.payload)
        })
    }
})

export default productSlice.reducer
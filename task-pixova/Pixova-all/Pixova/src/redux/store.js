import {configureStore} from "@reduxjs/toolkit"
import CardSlice from "./reducers/CardSlice"


export const store = configureStore({
    reducer:{
        cards : CardSlice,
    }
})
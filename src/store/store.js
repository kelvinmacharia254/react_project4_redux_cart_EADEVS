import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";
import uiSlice from "./uiSlice.js";

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        ui:uiSlice.reducer,
    }
})

export default store;
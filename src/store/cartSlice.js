import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
        totalQuantity:0,
    },
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            // find if the newItem if in the cart
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++ // update quantity
            if(!existingItem){ // add item to cart if new
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title,
                })
            }else{ // update quantity and total price if the item is existing in the cart
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
    },
    })


export const cartActions = cartSlice.actions
export default cartSlice;
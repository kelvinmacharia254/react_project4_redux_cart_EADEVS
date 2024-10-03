import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
        totalQuantity:0,
        changed: false
    },
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            // find if the Item is in the cart
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++ // update cart overall quantity of unique items
            state.changed = true;
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

        removeItemFromCart: (state, action) => {
            const itemId = action.payload;
            const existingItem  = state.items.find((item) => item.id === itemId);
            state.totalQuantity--;  // update cart overall quantity of unique items
            state.changed = true;
            if(existingItem.quantity === 1){ // remove item completely if one is exist in the cart
                state.items = state.items.filter((item) => item.id !== existingItem.id);
            }else{ // reduce quantity by 1 if more than one
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },

        replaceCart(state, action) {
            state.items = action.payload.items
            state.totalQuantity = action.payload.totalQuantity
        }
    },
    })


export const cartActions = cartSlice.actions
export default cartSlice;
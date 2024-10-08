import {cartActions} from "./cartSlice.js";
import {uiActions} from "./uiSlice.js";


export function fetchCartData(){
    return async (dispatch) =>{
        async function fetchData(){
            const response = await fetch(
                "https://cart-82104-default-rtdb.firebaseio.com/cart.json"
            )

            if(!response.ok){
                throw new Error("fetching cart data failed")
            }

            const data = await response.json()

            return data
        }


        try{
            const cartData = await fetchData();
            console.log(cartData);
            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                })
            )

        } catch (error){
            dispatch(
            uiActions.showNotification({
                status: "error",
                title:"Error!",
                message: "fetching cart data failed"
                })
            )
        }
    }
}

export function sendCartData(cart){
    return async (dispatch) =>{
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title:"sending...",
                message: "sending cart data"
                }
            )
        )

        async function sendRequest(){
            const response = await fetch(
                "https://cart-82104-default-rtdb.firebaseio.com/cart.json",
                {
                        method:"PUT",
                        body:JSON.stringify({
                            items:cart.items,
                            totalQuantity:cart.totalQuantity,
                        })
                    }
            )
            if(!response.ok){
                throw new Error("sending cart data failed")
            }
        }

        try{
            await sendRequest()
            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title:"success",
                    message: "sent cart data successfully"
                })
            )
        } catch (error){
            dispatch(
            uiActions.showNotification({
                status: "error",
                title:"Error!",
                message: "Sending cart data failed"
                })
            )
        }
    }
}
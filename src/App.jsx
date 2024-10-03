import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Products from "./components/shop/Products.jsx";
import Notification from "./components/UI/Notification.jsx";

import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {sendCartData} from "./store/cartActions.js";


let isInitial = true;
function App() {
    const dispatch = useDispatch()
    const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector(state => state.cart)
    const notification = useSelector(state => state.ui.notification)

    useEffect(() => {
        // don't fetch on initial render
        if (isInitial) {
            isInitial = false
            return
        }
        // only fetch if the cart have changed
        if(cart.changed){
           dispatch(sendCartData(cart))
        }

    }, [dispatch, cart]);

  return (
    <>
        {notification && <Notification
            status ={notification.status}
            title={notification.title}
            message ={notification.message}
        />}
      <Layout>
          {cartIsVisible && <Cart/>}
        <Products/>
      </Layout>
    </>
  )
}

export default App

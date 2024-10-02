import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Products from "./components/shop/Products.jsx";
import Notification from "./components/UI/Notification.jsx";

import {useSelector} from "react-redux";
function App() {
    const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  return (
    <>
        <Notification
            status = "pending"
            title= "sending..."
            message = "sending cart data"
        />
      <Layout>
          {cartIsVisible && <Cart/>}
        <Products/>
      </Layout>
    </>
  )
}

export default App

import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Products from "./components/shop/Products.jsx";

import {useSelector} from "react-redux";
function App() {
    const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  return (
    <>
      <Layout>
          {cartIsVisible && <Cart/>}
        <Products/>
      </Layout>
    </>
  )
}

export default App

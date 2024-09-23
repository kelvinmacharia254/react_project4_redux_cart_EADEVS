import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Products from "./components/shop/Products.jsx";
function App() {


  return (
    <>
      <Layout>
        <Cart/>
        <Products/>
      </Layout>
    </>
  )
}

export default App

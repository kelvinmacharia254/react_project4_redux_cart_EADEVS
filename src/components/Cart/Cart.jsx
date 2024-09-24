import classes from "./Cart.module.css";
import Card from "../UI/Card.jsx";

import {testData} from "../../testData.js";
import CartItem from "./CartItem.jsx";

// utilize redux store
 import {useSelector} from "react-redux";

const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.items);
    for(let item of cartItems){
        console.log(`Cart component: id: ${item.id}`);
        console.log(`Cart component: price: ${item.price}`);
        console.log(`Cart component: quantity: ${item.quantity}`);
        console.log(`Cart component: totalPrice: ${item.totalPrice}`);
        console.log(`Cart component: title: ${item.title}`);
    }

    return(
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <CartItem
                        key={index}
                        id={item.id}
                        title={item.title}
                        quantity={item.quantity}
                        price={item.price}
                        totalPrice={item.totalPrice}
                    />
                ))}
            </ul>
        </Card>
    )
}

export default Cart;
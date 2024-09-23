import classes from "./Cart.module.css";
import Card from "../UI/Card.jsx";

import {testData} from "../../testData.js";
import CartItem from "./CartItem.jsx";

// utilize redux store
 import {useSelector} from "react-redux";

const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.items);
    console.log(cartItems);
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
                        total={item.total}
                    />
                ))}
            </ul>
        </Card>
    )
}

export default Cart;
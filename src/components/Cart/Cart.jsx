import classes from "./Cart.module.css";
import Card from "../UI/Card.jsx";

import {cartData} from "../../testData.js";
import CartItem from "./CartItem.jsx";
const Cart = (props) => {

    return(
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartData.map((item, index) => (
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
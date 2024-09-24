import classes from "./CartItem.module.css";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cartSlice.js";

const CartItem = (props) => {
    const dispatch = useDispatch();
    // eslint-disable-next-line react/prop-types
    const {id, title, quantity,price, totalPrice} = props

    function addItemToCart() {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price
        }))
    }

    return(
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${totalPrice.toFixed(2)}{" "}
                    <span className={classes.item}>(${price.toFixed(2)}/item)</span>
                </div>
                <div className={classes.details}>
                    <div className={classes.quantity}>
                        x <span>{quantity}</span>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={null}>-</button>
                        <button onClick={addItemToCart}>+</button>
                    </div>
                </div>
            </header>
        </li>
)
}

export default CartItem
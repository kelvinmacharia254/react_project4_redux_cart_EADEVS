import classes from './CartButton.module.css'
import {useSelector, useDispatch} from "react-redux";
import {uiActions} from "../../store/uiSlice.js";

const CartButton = (props) => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();
    function toggleCart() {
        dispatch(uiActions.toggleCart());
    }

    return(
        <button onClick={toggleCart} className={classes.button}>
            <span>My Cart</span>
            {(totalQuantity > 0) && <span className={classes.badge}>{totalQuantity}</span>}
        </button>
    )
}

export default CartButton;
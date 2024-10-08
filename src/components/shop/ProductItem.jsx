import Card from "../UI/Card.jsx"
import classes from "./ProductItem.module.css"

// utilize redux store
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cartSlice.js";

const ProductItem = (props) => {
    const dispatch = useDispatch();

    // eslint-disable-next-line react/prop-types
    const { title, price, description, id } = props;
    function addItemToCart(){
        dispatch(
            cartActions.addItemToCart({
                id,
                title,
                price
            })
        )
    }

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addItemToCart}>Add to Cart</button>
                </div>
            </Card>
        </li>
    )
}

export default ProductItem;
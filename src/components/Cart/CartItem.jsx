import classes from "./CartItem.module.css";

const CartItem = (props) => {
    // eslint-disable-next-line react/prop-types
    const {id, title, quantity,price, total} = props
    return(
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total}{" "}
                    <span className={classes.item}>(${price.toFixed(2)}/ item)</span>
                </div>
                <div className={classes.details}>
                    <div className={classes.quantity}>
                        x <span>{quantity}</span>
                    </div>
                    <div className={classes.actions}>
                        <button onClick>-</button>
                        <button onClick>+</button>
                    </div>
                </div>
            </header>
        </li>
)
}

export default CartItem
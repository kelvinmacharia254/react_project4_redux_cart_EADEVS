import classes from "./MainHeader.module.css";
import CartButton from "../Cart/CartButton.jsx";
const MainHeader = (props) => {
    return(
        <header className={classes.header}>
            <h1>ReduxCart</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;
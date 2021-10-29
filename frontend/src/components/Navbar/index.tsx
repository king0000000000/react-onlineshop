import './index.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

type NavbarProps = {
    click: Function
}

const Navbar = (props: NavbarProps) => {

    const handleClick = (e: any) => {
        props.click();
    };

    const cart = useSelector((state:RootState) => state.cart)
    const { cartItems } = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + 1, 0)
    }

    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <h2>Testing Shop</h2>
            </div>

            <ul className="navbar_links">
                <li>
                    <Link to="/cart" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo_badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
            </ul>

            <div className="hamburger_menu" onClick={handleClick}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar

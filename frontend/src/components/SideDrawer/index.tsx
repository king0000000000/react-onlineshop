import './index.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

type SideDrawerProps = {
    show:boolean,
    click:Function
}

const SideDrawer = (props:SideDrawerProps) => {
    const sideDrawerClass = ["sidedrawer"]

    const handleClick = (e:any) => {
        props.click()
    }

    if(props.show){
        sideDrawerClass.push("show")
    }

    const cart = useSelector((state:RootState) => state.cart)
    const { cartItems } = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + 1, 0)
    }

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer_links" onClick={handleClick}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sidedrawer_cartbadge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer

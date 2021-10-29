import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'

//Components
import CartItem from '../../components/CartItem'

//Actions
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'

const CartScreen = () => {
    const dispatch = useDispatch()

    const cart = useSelector((state:RootState) => state.cart)
    const { cartItems } = cart

    const qtyChangeHandler = (id:string,qty:number) => {
        dispatch(addToCart(id,qty))
    }

    const removeHandler = (id:string) => {
        dispatch(removeFromCart(id))
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price,item) => item.price * item.qty + price, 0)
    }

    return (
        <div className="cartscreen">
            <div className="cartscreen_left">
                <h2>Shopping Cart</h2>
                {
                    cartItems.length === 0 ? (
                        <div>
                            你的購物車是空的，<Link to="/">回首頁</Link>
                        </div>
                    ) : cartItems.map((item:any) => ( 
                        <CartItem 
                            item={item} 
                            qtyChangeHandler={qtyChangeHandler} 
                            removeHandler={removeHandler} 
                            key={item.product}
                        />
                    ))
                }
            </div>
            <div className="cartscreen_right">
                <div className="cartscreen_info">
                    <p>總共({getCartCount()})樣物品</p>
                    <p>${getCartSubTotal()} NT</p>
                </div>
                <div>
                    <button>確認結帳</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen

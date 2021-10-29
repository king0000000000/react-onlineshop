import './index.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

// Actions
import { getProductDetails } from '../../redux/actions/productActions'
import { addToCart } from '../../redux/actions/cartActions'

const ProductScreen = ({ match, history }: { match: any, history: any }) => {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const productDetails = useSelector((state: RootState) => state.getProductDetails)
    const { loading, error, product }: { loading: any, error: any, product: any } = productDetails

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, product, match])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty))
        history.push("/cart")
    }

    return (
        <div className="productscreen">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className="productscreen_left">
                        <div className="left_image">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>

                        <div className="left_info">
                            <p className="left_name">{product.name}</p>
                            <p>價格：${product.price} NT</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="productscreen_right">
                        <div className="right_info">
                            <p>
                                價格： <span>${product.price} NT</span>
                            </p>
                            <p>
                                狀態：{" "}
                                <span>
                                    {product.countInStock > 0 ? "有現貨" : "已售完"}
                                </span>
                            </p>
                            <p>
                                數量
                                <select value={qty} onChange={(e) => setQty(parseInt(e.target.value))}>
                                    {[...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                            </p>
                        </div>
                    </div>
                </>
            )

            }

        </div>
    )
}

export default ProductScreen

import './index.css'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'

//Components
import Product from '../../components/Product'

//Actions
import { getProducts as listProducts } from '../../redux/actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const getProducts = useSelector((state:RootState) => state.getProducts)
    const { products, loading, error }:{products:any, loading: any, error:any} = getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className="homescreen">
            <h2 className="homescreen_title">Latest Products</h2>

            <div className="homescreen_products">
                {loading ? (
                    <h2>讀取中...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    products.map((product:any) => (
                        <Product
                            key={product._id}
                            productId={product._id}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            imageUrl={product.imageUrl}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default HomeScreen

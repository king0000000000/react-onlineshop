import "./index.css"
import { Link } from "react-router-dom"

type productInput = { imageUrl: string, name: string, price: number, description: string, productId: string }

const Product = ({ imageUrl, name, price, description, productId }: productInput) => {
    return (
        <div className="product">
            <img src={imageUrl} alt={name} />

            <div className="product_info">
                <p className="info_name">{name}</p>
                <p className="info_description">{description.substring(0, 100)}...</p>

                <p className="info_price">${price} NT</p>

                <Link to={`/product/${productId}`} className="info_button">
                    View
                </Link>
            </div>
        </div>
    )
}

export default Product

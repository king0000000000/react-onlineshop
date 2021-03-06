import * as actionTypes from "../constants/cartConstants"
import axios from "axios"

export const addToCart = (id:string, qty:number) => async (dispatch:Function, getState:Function) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id:string) => (dispatch:Function, getState:Function) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
}
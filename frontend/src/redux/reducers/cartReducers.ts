import * as actionTypes from "../constants/cartConstants"

export const cartReducer = (prestate:{ cartItems:(any[]) } = { cartItems:[] }, action:{type:string, payload:any}) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload

            const existItem = prestate.cartItems.find((x) => x.product === item.product)

            if(existItem) {
                return {
                    ...prestate,
                    cartItems: prestate.cartItems.map((x) => 
                        x.product === existItem.product ? item : x
                    )
                }
            } else {
                return {
                    ...prestate,
                    cartItems: [...prestate.cartItems, item]
                }
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...prestate,
                cartItems: prestate.cartItems.filter((x) => x.product !== action.payload)
            }
        default:
            return prestate
    }
}
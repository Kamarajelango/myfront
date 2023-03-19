import { createContext, useReducer } from 'react';
import { cartReducer } from './Reducer';


export const CartContext = createContext();

const initialState = {
    products: [],
    cart: [],
}

export function Context({ children }) {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: item,
        })
    }

    const removeToCart = (id) => {
        dispatch({
            type: 'REMOVE_TO_CART',
            payload: id,
        })
    }

    const changeQuantity = (id, quantity) => {
        dispatch({
            type: "CHANGE_QUANTITY",
            payload: {
                id,
                quantity,
            }
        })
    }

    const cartEmpty = (cart) => {
        dispatch({
            type: "CART_EMPTY",
            payload: cart,
        })
    }


    return (
        <CartContext.Provider value={{
            products: state.products,
            cart: state.cart,
            addToCart,
            removeToCart,
            changeQuantity,
            cartEmpty,
        }}>
            {children}
        </CartContext.Provider>
    )
}


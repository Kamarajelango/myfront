export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, action.payload] }
        case "REMOVE_TO_CART":
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) }
        case 'CHANGE_QUANTITY':
            return { ...state, cart: state.cart.filter((item) => item.id === action.payload.id ? (item.quantity = action.payload.quantity) : item.quantity) }
        case 'REMOVE_ITEM':
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) }
        case 'CART_EMPTY':
            return { ...state, cart: [] }
        default:
            return state;
    }
}
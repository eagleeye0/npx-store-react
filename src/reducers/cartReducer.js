export const cartReducer = (state = { cartItems: [], shippingInfo: {} }, action) => {
    switch (action.type) {

        case 'GET_CART_ITEMS_SUCCESS':
            return {
                cartItems: action.payload
            }

        case 'ADD_TO_CART':
            const item = action.payload;

            const isItemExist = state.cartItems.find(i => i.product_id === item.product_id)

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.product_id === isItemExist.product_id ? item : i)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case 'REMOVE_ITEM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.product_id !== action.payload)
            }


        case 'SAVE_SHIPPING_INFO':
            return {
                ...state,
                shippingInfo: action.payload
            }


        default:
            return state
    }
}
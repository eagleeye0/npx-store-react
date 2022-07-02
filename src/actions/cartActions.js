import axios from "axios";

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/apiv1/product/${id}`)
    const isAuthenticated = getState().auth.isAuthenticated;

    if(isAuthenticated){
        await axios.get('/apiv1/update-cart/' + id + '/' + quantity);
    }

    dispatch({
        type: 'ADD_TO_CART',
        payload: {
            product_id: data.id,
            product_name: data.product_name,
            sale_price: data.sale_price,
            // sale_price: data.sale_price,
            // image: data.images[0].url,
            quantity: quantity
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemFromCart = (id) => async (dispatch, getState) => {
    const isAuthenticated = getState().auth.isAuthenticated;

    if(isAuthenticated){
        await axios.get('/apiv1/update-cart/' + id + '/0');
    }

    dispatch({
        type: 'REMOVE_ITEM_CART',
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}

export async function addCartToDb(cart) {
    const cartItems = cart.cartItems;
    for(var i=0;i<cartItems.length;i++){
        const id = cartItems[i].product_id;
        const quantity = cartItems[i].quantity;
        await axios.get('/apiv1/update-cart/' + id + '/' + quantity)
    }
}

export const loadCartFromDb = () => async (dispatch, getState) => {
    try {
        
        dispatch({ type: 'GET_CART_ITEMS_REQUEST' })
        
        const { data } = await axios.get('/apiv1/get-cart-items/')
        console.log(data);
        
        const cartItems = data.cart_items
        for(var i=0;i<cartItems.length;i++){
            dispatch(addItemToCart(cartItems[i].product_id, cartItems[i].quantity))
        }
        
    }
    catch (error) {
        
    }

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingInfo = (data) => async (dispatch) => {

    dispatch({
        type: 'SAVE_SHIPPING_INFO',
        payload: data
    })

    localStorage.setItem('shippingInfo', JSON.stringify(data))

}
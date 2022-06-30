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
            mrp_price: data.mrp_price,
            sale_price: data.sale_price,
            // image: data.images[0].url,
            // stock: data.stock,
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

export function addCartToDb(cart) {
    const cartItems = cart.cartItems;
    for(var i=0;i<cartItems.length;i++){
        const id = cartItems[i].product_id;
        const quantity = cartItems[i].quantity;
        axios.get('/apiv1/update-cart/' + id + '/' + quantity)
    }
}

export const loadCartFromDb = (user_id) => async (dispatch, getState) => {
    const { data } = await axios.get('/apiv1/get-cart-items/')



    // dispatch({
    //     type: 'LOAD_CART_ITEMS',
    //     payload: {
    //         product_id: data.id,
    //         product_name: data.product_name,
    //         mrp_price: data.mrp_price,
    //         sale_price: data.sale_price,
    //         // image: data.images[0].url,
    //         // stock: data.stock,
    //         quantity: data.quantity
    //     }
    // })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingInfo = (data) => async (dispatch) => {

    dispatch({
        type: 'SAVE_SHIPPING_INFO',
        payload: data
    })

    localStorage.setItem('shippingInfo', JSON.stringify(data))

}
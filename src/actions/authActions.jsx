import axios from "axios"

export const login = (email, password) => async (dispatch,getState) => {

    try {

        dispatch({ type: 'LOGIN_REQUEST' })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post('/apiv1/login/', {
            'email': email,
            'password': password
        }, config)

        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: data.user
        })
        loadUser()(dispatch,getState)

    } catch (error) {
        dispatch({
            type: 'LOGIN_FAILURE',
            payload: error.response.data.message
        })
    }
}

export const register = (first_name, last_name, email, password) => async (dispatch) => {
    try {

        dispatch({ type: 'REGISTER_USER_REQUEST' })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post('/apiv1/register/', {
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'password': password,
        }, config)

        dispatch({
            type: 'REGISTER_USER_SUCCESS',
            payload: data.user
        })

        login(email, password)(dispatch)

    } catch (error) {
        dispatch({
            type: 'LOGIN_FAILURE',
            payload: error.response.data.message
        })
    }
}

export const loadUser = () => async (dispatch,getState) => {
    try {
        
        dispatch({ type: 'GET_USER_INFO_REQUEST' })
        
        const { data } = await axios.get('/apiv1/me/')
        
        dispatch({
            type: 'GET_USER_INFO_SUCCESS',
            payload: data,
        })

        addCartToDb(getState().cart)
    }
    catch (error) {
        dispatch({
            type: 'GET_USER_INFO_FAILURE',
        })
    }
}

function addCartToDb(cart) {
    const cartItems = cart.cartItems;
    for(var i=0;i<cartItems.length;i++){
        const id = cartItems[i].product_id;
        const quantity = cartItems[i].quantity;
        axios.get('/apiv1/update-cart/' + id + '/' + quantity)
    }
}

export const logout = () => async (dispatch) => {
    try {
        await axios.get('/apiv1/logout/')

        dispatch({
            type: 'LOGOUT_SUCCESS',
        })

    } catch (error) {

        dispatch({
            type: 'LOGOUT_FAILURE'
        })
    }
}


import React from "react";
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { productDetailReducer, productsReducer } from './reducers/productsReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './reducers/authReducer';
import { cartReducer } from "./reducers/cartReducer";


const reducer = combineReducers({
    products: productsReducer,
    product: productDetailReducer,
    auth: authReducer,
    cart: cartReducer,
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}

const middlware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)));
export default store;

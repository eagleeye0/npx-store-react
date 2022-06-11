import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { productDetailReducer, productsReducer } from './reducers/productsReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './reducers/authReducer';


const reducer = combineReducers({
    products: productsReducer,
    product: productDetailReducer,
    auth: authReducer,
})

const middlware = [thunk];

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middlware)));
export default store;

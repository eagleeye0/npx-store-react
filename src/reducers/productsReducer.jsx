export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_REQUEST':
            return {
                products: [],
                loading: true,
            };
        case 'GET_PRODUCTS_SUCCESS':
            return {
                loading: false,
                products: action.payload.products,
            };
        case 'GET_PRODUCTS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const productDetailReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_DETAIL_REQUEST':
            return {
                product: [],
                loading: true,
            };
        case 'GET_PRODUCT_DETAIL_SUCCESS':
            return {
                loading: false,
                product: action.payload,
            };
        case 'GET_PRODUCT_DETAIL_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}
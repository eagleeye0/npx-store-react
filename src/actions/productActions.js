import axios from "axios";

export const getProducts = () => async (dispatch) => {
    try {

        dispatch({
            type: 'GET_PRODUCTS_REQUEST'
        })
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const url = "/apiv1/all_products/";
        const { data } = await axios.post(url, { "page_number": 1, "page_size": 9 }, config);
        dispatch({
            type: 'GET_PRODUCTS_SUCCESS',
            payload: data
        });
    }
    catch (error) {
        dispatch({
            type: 'GET_PRODUCTS_FAILURE',
            payload: error.response.data.message
        });
    }
}

export const getProductDetail = (product_id) => async (dispatch) => {
    try {

        dispatch({
            type: 'GET_PRODUCT_DETAIL_REQUEST'
        })

        const url = "/apiv1/product/" + product_id;
        const { data } = await axios.get(url);

        dispatch({
            type: 'GET_PRODUCT_DETAIL_SUCCESS',
            payload: data
        });

    }
    catch (err) {
        dispatch({
            type: 'GET_PRODUCT_DETAIL_FAILURE',
            payload: err.response.data.message
        });
    }
}



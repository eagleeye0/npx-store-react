
export const authReducer = (state = { user: null, isAuthenticated: false }, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
        case 'REGISTER_USER_REQUEST':
        case 'GET_USER_INFO_REQUEST':
            return {
                isAuthenticated: false,
                loading: true,
            }
        case 'LOGIN_SUCCESS':
        case 'REGISTER_USER_SUCCESS':
        case 'GET_USER_INFO_SUCCESS':
            return {
                loading: false,
                user: action.payload,
                isAuthenticated: true,
            }
        case 'LOGIN_FAILURE':
        case 'REGISTER_USER_FAILURE':
        case 'GET_USER_INFO_FAILURE':
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            }
        case 'LOGOUT_SUCCESS':
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            }
        case 'LOGOUT_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: null,
            }
        default:
            return state
    }
}

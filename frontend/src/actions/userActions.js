import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
} from '../constants/userConstants'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })

        // Header to send with the request
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        // Make request to server and get the response data
        const { data } = await axios.post(
            '/api/users/login',
            { email, password },
            config
        )

        // Dispatch user login success after making the request
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        // Set user data to local storage
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

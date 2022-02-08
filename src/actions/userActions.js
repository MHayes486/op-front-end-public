import axios from 'axios'

export const registerUser=(user) => async dispatch => {

    dispatch({type: 'USER_REGISTER_REQUEST'})

    try {
        const response = await axios.post('https://dig33-apricot-backend.herokuapp.com/users/register', user)
        console.log(response)
        dispatch({type: 'USER_REGISTER_SUCCESS', payload : response.data})
    } catch (error) {
        dispatch({type: 'USER_REGISTER_FAILED', payload : error})
    }

}

export const loginUser=(user) => async dispatch => {

    dispatch({type: 'USER_LOGIN_REQUEST'})

    try {
        const response = await axios.post('https://dig33-apricot-backend.herokuapp.com/users/login', user)
        console.log(response)
        dispatch({type: 'USER_LOGIN_SUCCESS'})
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href='/'
    } catch (error) {
        dispatch({type: 'USER_LOGIN_FAILED', payload : error})
    }

}


export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('merchUser')
    window.location.reload(false)
    window.location.href='login'
}
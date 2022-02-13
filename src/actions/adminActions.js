import axios from "axios";
export const placeOrder = (token, subtotal) => async (dispatch, getState) => {


    dispatch({ type: 'PLACE_ORDER_REQUEST' })
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems

    try {

        const response = await axios.post('https://dig33-apricot-backend.herokuapp.com/orders/placeorder', { token, subtotal, currentUser, cartItems })
        dispatch({ type: 'PLACE_ORDER_SUCCESS' })
        console.log(response);

    } catch (error) {
        dispatch({ type: 'PLACE_ORDER_FAILED' })
        console.log(error);

    }



}


export const getUserOrders = () => async (dispatch, getState) => {

    const currentUser = getState().loginUserReducer.currentUser
    dispatch({ type: 'GET_USER_ORDERS_REQUEST' })

    try {
        const response = await axios.post('https://dig33-apricot-backend.herokuapp.com/orders/getuserorders', { userid: currentUser._id })


        console.log(response);

        dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_USER_ORDERS_FAILED', payload: error })
    }

}

export const getAllOrders = () => async (dispatch, getState) => {

    const currentUser = getState().loginUserReducer.currentUser
    dispatch({ type: 'GET_ALLORDERS_REQUEST' })

    try {
        const response = await axios.get('https://dig33-apricot-backend.herokuapp.com/orders/getallorders')


        console.log(response);

        dispatch({ type: 'GET_ALLORDERS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_ALLORDERS_FAILED', payload: error })
    }

}

export const deliverOrder = (orderid) => async dispatch => {



    try {
        const response = await axios.post('https://dig33-apricot-backend.herokuapp.com/orders/deliverorder', { orderid })
        console.log(response);
        alert('Order Delivered')
        const orders = await axios.get('https://dig33-apricot-backend.herokuapp.com/orders/getallorders')
        dispatch({ type: 'GET_ALLORDERS_SUCCESS', payload: orders.data })
    } catch (error) {
        console.log(error);
    }


}




export const activateMerchandise = (merchid) => async dispatch => {

    try {
        //    console.log(merchid);
        const newURL = 'https://dig33-apricot-backend.herokuapp.com/merchandise/activatemerchandise/' + merchid;
        //    console.log(newURL);
        const response = await axios.put(newURL, { merchid })
        console.log(response);
        //    console.log(merchid);
        alert('This merchandise item is now live and able to be purchased')
        //  const orders = await axios.get('https://dig33-apricot-backend.herokuapp.com/merchandise/')
        //  dispatch({type:'GET_ALLORDERS_SUCCESS' , payload:orders.data})
    } catch (error) {
        console.log(error);
    }

}

export const deactivateMerchandise = (merchid) => async dispatch => {

    try {
        //    console.log(merchid);
        const newURL = 'https://dig33-apricot-backend.herokuapp.com/merchandise/deactivatemerchandise/' + merchid;
        //    console.log(newURL);
        const response = await axios.put(newURL, { merchid })
        console.log(response);
        //    console.log(merchid);
        alert('This merchandise item has be deactived and cannot be purchased')
        //  const orders = await axios.get('https://dig33-apricot-backend.herokuapp.com/merchandise/')
        //  dispatch({type:'GET_ALLORDERS_SUCCESS' , payload:orders.data})
    } catch (error) {
        console.log(error);
    }

}


export const activatePairings = (pairsid) => async dispatch => {

    try {
        //    console.log(merchid);
        const newURL = 'https://dig33-apricot-backend.herokuapp.com/pairings/activatepairings/' + pairsid;
        //    console.log(newURL);
        const response = await axios.put(newURL, { pairsid })
        console.log(response);
        //    console.log(merchid);
        alert('This merchandise item is now live and able to be purchased')
        //  const orders = await axios.get('https://dig33-apricot-backend.herokuapp.com/merchandise/')
        //  dispatch({type:'GET_ALLORDERS_SUCCESS' , payload:orders.data})
    } catch (error) {
        console.log(error);
    }

}

export const deactivatePairings = (pairsid) => async dispatch => {

    try {
        //    console.log(pairsid);
        const newURL = 'https://dig33-apricot-backend.herokuapp.com/pairings/deactivatepairings/' + pairsid;
        //    console.log(newURL);
        const response = await axios.put(newURL, { pairsid })
        console.log(response);
        //    console.log(pairsid);
        alert('This merchandise item has be deactived and cannot be purchased')
        //  const orders = await axios.get('https://dig33-apricot-backend.herokuapp.com/merchandise/')
        //  dispatch({type:'GET_ALLORDERS_SUCCESS' , payload:orders.data})
    } catch (error) {
        console.log(error);
    }

}


export const getPairingById=(pairingid)=>async dispatch=>{

    dispatch({type:'GET_PAIRINGBYID_REQUEST'})

    try {
        const response = await axios.post('https://dig33-apricot-backend.herokuapp.com/pizzas/getpizzabyid' , {pairingid})
        console.log(response);
        dispatch({type:'GET_PAIRINGBYID_SUCCESS' , payload : response.data})
    } catch (error) {
        dispatch({type:'GET_PAIRINGBYID_FAILED' , payload : error})
    }

}


export const editPairing=(editedPairing)=>async dispatch=>{
    dispatch({type:'EDIT_PAIRING_REQUEST'})
    try {
        const response= await axios.post('https://dig33-apricot-backend.herokuapp.com/pairing/editpairings' , {editedPairing})
        console.log(response);
        dispatch({type:'EDIT_PAIRING_SUCCESS'})
        window.location.href='/admin/pairingslist'
    } catch (error) {
        dispatch({type:'EDIT_PAIRING_FAILED' , payload : error})
    }
}
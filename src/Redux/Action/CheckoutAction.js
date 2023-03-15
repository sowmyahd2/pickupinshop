import Api from '../../Config/Api';
import Type from './Types';

export const placeOrder = (order, type, city) => async dispatch => {
    try
    {
        const body = order;
        const response = await Api.post('checkout/'+type+'/'+city,body)
        if(response.message === "success"){
            dispatch({
                    type : Type.checkoutSuccess,
                    payload : response.data
                })
            }
            
        } catch(error){
            dispatch({
                type : Type.checkoutFailure,
                payload : error.message
            })          
         
        }
    } 

    
import Api from '../../Config/Api';
import Type from './Types';



export const getLogin = (email,password) => async dispatch => {
    try{
        const body = {
            email,
            password
        }
        const response = await Api.post('auth',body)
        if(response.message === "success"){
            dispatch({
                type : Type.loginSuccess,
                payload : response.data
            })
        }else{
            dispatch({
                type :Type.loginFailure,
                payload:response.message
            })
        }
    }catch(error){ 

    }
}

export const logout = () => dispatch => {
    dispatch({
        type : Type.logOutSuccess
    })
}
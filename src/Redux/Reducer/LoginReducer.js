import Type from '../Action/Types';

const intialState = {
    user:{},
    error:""
}

const LoginReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.loginSuccess:
            return Object.assign({}, state, {
                user: action.payload,
                error:""
            })
        case Type.loginFailure:
            return Object.assign({}, state,{
                user:{},
                error:action.payload
            })
            case Type.logOutSuccess:
                    return intialState
            default:
                return state; 
    } 
}

export default LoginReducer;
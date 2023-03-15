import Type from '../Action/Types';

const intialState = {
    addtoCart:[],
    error:""
}

const CartReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.addtocartSuccess:
            return Object.assign({}, state, {
                addtoCart: action.payload
            })
            default:
                return state;
    } 
}

export default CartReducer;
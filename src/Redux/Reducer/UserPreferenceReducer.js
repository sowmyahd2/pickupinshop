import Type from "../Action/Types"

const intialState = {
    city: "mysore"
}


const UserPreferenceReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.selectCitySuccess:
            return Object.assign({}, state, {
                city: action.payload
            })
        default:
            return state;
    }
}

export default UserPreferenceReducer;
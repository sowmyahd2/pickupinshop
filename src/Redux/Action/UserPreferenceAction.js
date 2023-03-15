import Type from './Types';
import Api from '../../Config/Api';

export const setCity = (city) =>  dispatch => {
    
        
        dispatch({
                type : Type.selectCitySuccess,
                payload : city
            })
        
    } 
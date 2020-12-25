import * as type from '../actionsTypes';
import {typeState} from '../reducers/article';

export const Add= (payload:typeState) =>{

    return {
        type:type.acticle.ADD,
        payload
    }

}
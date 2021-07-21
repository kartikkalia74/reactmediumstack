import * as type from '../actionsTypes';
import {typeState} from '../reducers/skills';

export const Add= (payload:typeState[]) =>{

    return {
        type:type.skill.ADDSKILLLIST,
        payload
    }

}
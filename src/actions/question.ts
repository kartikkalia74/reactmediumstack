import * as type from '../actionsTypes'
import {typeState} from '../reducers/question'

export const Add= (payload:typeState) =>{

    return {
        type:type.question.ADD,
        payload
    }

}
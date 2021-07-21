import * as ActionTypes from '../actionsTypes/index';
 export type typeState = {
     _id:string,
    icon:string,
    name:string
}
export type Action = {
    type:string,
    payload:typeState[]
}
export const initialState:typeState[] =[] 
export const  Skill = (intiliseState=initialState,action:Action) => {
    switch(action.type){
        case ActionTypes.skill.ADDSKILLLIST : return [...action.payload ];
        // case ActionTypes.acticle.REMOVE : return intiliseState.filter((each)=>each.id === action.payload.id);
        // case  ActionTypes.acticle.LIKE: return   
        default: return intiliseState;
    }
}
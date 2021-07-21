import * as ActionTypes from '../actionsTypes/index';
 export type typeState = {
    id:number,
    title:string ,
    content:any,
    likes?:number,
    skills:string[],
    comment?:
    [{
            author:string,
            message:string
    }]
}
export type Action = {
    type:string,
    payload:typeState
}
export const initialState:typeState[] = []
export const  article = (intiliseState=initialState,action:Action) => {
    switch(action.type){
        case ActionTypes.acticle.ADD : return [...intiliseState,{...action.payload,id:intiliseState.length }];
        case ActionTypes.acticle.REMOVE : return intiliseState.filter((each: { id: number; })=>each.id === action.payload.id);
        // case  ActionTypes.acticle.LIKE: return   
        default: return intiliseState;
    }
}
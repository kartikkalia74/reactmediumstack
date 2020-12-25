import * as ActionTypes from '../actionsTypes/index';

export type typeState = {
    id:string,
    question:string ,
    content:object,
    skills:string[],
    likes?:number,
    author?:string,
    comment?:[
        {
            author:string,
            message:string
    }
    ]
}

export type Action = {
    type:string,
    payload:typeState
}
export const  Question = (intiliseState:typeState[]=[],action:Action) => {

    switch(action.type){
        case ActionTypes.question.ADD : return [...intiliseState,action.payload];
        case ActionTypes.question.REMOVE : return intiliseState.filter((each)=>each.id === action.payload.id);
        case  ActionTypes.question.LIKE: {return intiliseState }   
        default: return intiliseState;
    }
}
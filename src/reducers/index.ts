

import { combineReducers,createStore } from 'redux';
import  {article, initialState as articalState}  from '../reducers/article'
import  {Question, initialState as questionState}  from '../reducers/question'
import {Skill as skill ,initialState as skillState} from '../reducers/skills'



// export const  RootState =(initialstate={},action:{type:string})=>{
//     switch(action.type){

//         default:return initialstate;
//     }
// }
export type reducerType = {
  article:typeof articalState,skill:typeof skillState,question:typeof questionState
} 
export const reducerCombineObj ={article,skill,question:Question}
const reducers = combineReducers(reducerCombineObj)
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        obj: Record<string, any>
      ) => Function;
    }
    interface NodeModule {
      hot?: {
        accept: (path: string, cb: () => void) => void;
      };
    }
  }
export type RootAction = {}
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose;
export const Store  = createStore(reducers,{})
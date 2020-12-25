

import {  Store as ReduxStore,compose, Action,combineReducers,createStore } from 'redux';
import  {article}  from '../reducers/article'
import  {Question}  from '../reducers/question'



// export const  RootState =(initialstate={},action:{type:string})=>{
//     switch(action.type){

//         default:return initialstate;
//     }
// }
const reducers = combineReducers({article,question:Question})
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
export const Store = createStore(reducers,{})


import { createStore,combineReducers, applyMiddleware, compose } from 'redux';
import  {article, initialState as articalState}  from '../reducers/article'
import  {Question, initialState as questionState}  from '../reducers/question'
import {Skill as skill ,initialState as skillState} from '../reducers/skills'



// export const  RootState =(initialstate={},action:{type:string})=>{
//     switch(action.type){

//         default:return initialstate;
//     }
// }

 const composeEnhancers = typeof window === 'object' &&
 (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
     // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
   }) : compose;
//  const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//  const store = createStore(reducer, /* preloadedState, */ compose(
//     applyMiddleware(...middleware)
//   ));

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
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// function logger({ getState }) {
//   return _next => action => {
//     console.log('will dispatch', action)

//     // Call the next dispatch method in the middleware chain.
//     const returnValue = _next(action)

//     console.log('state after dispatch', getState())

//     // This will likely be the action itself, unless
//     // a middleware further in chain changed it.
//     return returnValue
//   }
// }
export const Store  = createStore(reducers,composeEnhancers(applyMiddleware()))
// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import {createWrapper} from 'next-redux-wrapper';
// // import rootReducer from './rootReducer';
// import {
//     Action,
//     AnyAction,
//     combineReducers,
//     configureStore,
//     ThunkAction,
//   } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';
// const middlewares = [logger, thunk];
// let store :any;
// const isClient = typeof window !== 'undefined';


// // if(isClient){
// // middlewares.push(logger);
// // store = createStore(rootReducer,applyMiddleware(...middlewares));
// // }else{
// //     store = createStore(rootReducer, applyMiddleware(...middlewares));
  
// // }
// const reducer = (state, action: { type: any; payload: { user: { isNumberVerified: any; }; message: any; }; } | { type: any; payload: { data: any; }; }) => {
//     if (action.type === 'HYDRATE') {
//       const nextState = {
//         ...state, // use previous state
//         ...action.payload, // apply delta from hydration
//       };
//       return nextState;
//     } else {
//       return rootReducer(state, action);
//     }
//   };


// export const makeStore = () => configureStore({
//     reducer,
// })
  
  
// // const persistor = persistStore(store);


// // export {store, persistor};

// type Store = ReturnType<typeof makeStore>;

// export type AppDispatch = Store['dispatch'];
// export type RootState = ReturnType<Store['getState']>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// export const wrapper = createWrapper(makeStore, { debug: true });

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import persistReducer from "./reducers";

// initial states here
// const initalState = {

// };

// middleware
const middleware = [thunk, logger];

// creating store
export const store = createStore(
  rootReducer,
//   initalState,

 applyMiddleware(...middleware)
);
store.__PERSISTOR = persistStore(store);
// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
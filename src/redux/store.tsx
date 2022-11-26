// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import persistReducer from "./reducers";


// middleware
const middleware = [thunk, logger];

// creating store
export const store = createStore(
  rootReducer,
 applyMiddleware(...middleware)
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
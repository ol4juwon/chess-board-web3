import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './reducers/authReducers';
import gameReducer from './reducers/games/gamesSlice';
import { RootState } from './store';
// enableMapSet();


const combinedReducers = combineReducers({
  user: authReducer,
  game: gameReducer,
});
const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    return combinedReducers(state, action);
  };

export default rootReducer;
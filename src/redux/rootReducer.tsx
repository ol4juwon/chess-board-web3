import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './reducers/authReducers';
import gameReducer from './reducers/gameReducers';

const persistConfig = {
  key: 'root',
  storage
};

export const rootReducer = combineReducers({
  user: authReducer,
  game: gameReducer,
});

export default persistReducer(persistConfig, rootReducer);

import { combineReducers } from '@reduxjs/toolkit';
import allGamesReducer from './allGamesSlice';
import gamesByIdReducer from './gamesByIdSlice';

export default combineReducers({
  byId: gamesByIdReducer,
  allIds: allGamesReducer,
});

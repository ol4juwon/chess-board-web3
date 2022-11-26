import { CombinedState, combineReducers } from "redux";
import authReducer from "./authReducers";
import gameReducer from "./gameReducers";
const appReducer = combineReducers({
  auth: authReducer,
  games: gameReducer
});
const rootReducer = appReducer


export default rootReducer;

import { CombinedState, combineReducers } from "redux";
import authReducer from "./authReducers";
import gameReducer from "./games/gamesSlice";
const appReducer = combineReducers({
  auth: authReducer,
  games: gameReducer
});
const rootReducer = appReducer


export default rootReducer;

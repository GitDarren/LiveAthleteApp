import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import todos from "./todos";
import dogs from "./dogs";

const rootReducer = combineReducers({
  todos,
  dogs,
  routing: routerReducer
});

export default rootReducer;

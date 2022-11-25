import { combineReducers } from "redux";
import { likesReducer } from "./likes-reducer";
import { inputReducer } from "./input-reducer";
import { commentReducer } from "./commentReducer";
export const rootReducer = combineReducers({
likesReducer, inputReducer, commentReducer
})
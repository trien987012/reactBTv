import { combineReducers, createStore } from "redux";
import { imgCarReducer } from "./reducers/imgCarReducer";
import { numberReducer, } from "./reducers/numberReducer";
import { qlsvReducer } from "./reducers/qlsvReducer";

//rootReducer: state tong cua ung dung
const rootReducer = combineReducers({
    number:numberReducer,      
    imgCar:imgCarReducer,
    qlsvReducer //object literal
    //stateA,...
});


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
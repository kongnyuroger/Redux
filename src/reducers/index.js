import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import selectedItems from "./selectedItems";
import { combineReducers } from "redux";
import userReducer from "./user";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    items: selectedItems,
    user: userReducer
});

export default  allReducers
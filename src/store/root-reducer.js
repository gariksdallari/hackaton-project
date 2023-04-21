import { combineReducers } from "redux";
import { userReducer } from "./user/user";
import { cartReducer } from "./Cart/Cart";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default rootReducer;
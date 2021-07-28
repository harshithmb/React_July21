import { combineReducers, createStore } from "redux";
import productsReducer from "../reducers/productsReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  productsReducer,
  userReducer,
});
const store = createStore(rootReducer);

export default store;

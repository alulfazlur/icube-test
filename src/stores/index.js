import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import productsReducer from "./reducers";

const rootReducer = combineReducers({
  productsState: productsReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

// store.subscribe(() => console.warn("cek state store", store.getState()));

export default store;

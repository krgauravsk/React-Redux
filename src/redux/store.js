import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //redux-devtools-ext link

export default store;

import { legacy_createStore as createStore } from "redux";
import quizReducer from "./reducers";

const store = createStore(quizReducer);

export default store;

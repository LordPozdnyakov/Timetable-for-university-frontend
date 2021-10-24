import {applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { ProfileReducer } from "./Reducers/ProfileReducer";
import { UserReducer } from "./Reducers/userReducer";


let redusers = combineReducers({
    profile: ProfileReducer,
    user: UserReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(redusers,composeEnhancers(applyMiddleware(thunkMiddleware)))
export default store;
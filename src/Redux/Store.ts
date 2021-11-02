import { combineReducers } from "redux";
import { ProfileReducer } from "./Reducers/ProfileReducer";

import studentsReducer from "./Reducers/studentsSlice";
import loginSlice from "./Reducers/loginSlice";
import { configureStore } from "@reduxjs/toolkit";

type redusersType = typeof reducers;
export type AppStateType = ReturnType<redusersType>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

let reducers = combineReducers({
  profile: ProfileReducer,
  loginSlice,
  studentsReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: reducers,
  });
};

export default setupStore;

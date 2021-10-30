import { combineReducers } from "redux";
import { ProfileReducer } from "./Reducers/ProfileReducer";
import { UserReducer } from "./Reducers/userReducer";
import studentsReducer from "./Reducers/studentsSlice";
import { configureStore } from "@reduxjs/toolkit";

type redusersType = typeof reducers;
export type AppStateType = ReturnType<redusersType>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

let reducers = combineReducers({
  profile: ProfileReducer,
  user: UserReducer,
  studentsReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: reducers,
  });
};

export default setupStore;

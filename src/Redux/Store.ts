import { combineReducers } from "redux";
import { ProfileReducer } from "./Reducers/ProfileReducer";

import studentsReducer from "./Reducers/studentsSlice";
import groupsReducer from "./Reducers/groupsSlice";
import teachersReducer from "./Reducers/teachersSlice";
import usersReducer from "./Reducers/usersSlice";
import loginSlice from "./Reducers/loginSlice";
import RecoveryPasswordSlice from "./Reducers/RecoveryPasswordSlice";
import recoverySlice from "./Reducers/RecoverySlice";
import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "./Reducers/registrationSlice";

type redusersType = typeof reducers;
export type AppStateType = ReturnType<redusersType>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

let reducers = combineReducers({
  profile: ProfileReducer,
  loginSlice,
  registrationSlice,
  recoverySlice,
  studentsReducer,
  groupsReducer,
  teachersReducer,
  usersReducer,
  RecoveryPasswordSlice,
});

const setupStore = () => {
  return configureStore({
    reducer: reducers,
  });
};

export default setupStore;

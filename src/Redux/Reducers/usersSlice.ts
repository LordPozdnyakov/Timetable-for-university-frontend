import UserType from "../../Types/UserType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UsersState = {
  users: UserType[];
  loading: boolean;
  error: string | null;
  selectedUser: UserType | null;
};

const initialUsersState: UsersState = {
  users: [],
  loading: false,
  error: null,
  selectedUser: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchUsersSuccess(state, action: PayloadAction<UserType[]>) {
      state.loading = false;
      state.error = null;
      state.users = action.payload;
    },
    fetchUserByIdSuccess(state, action: PayloadAction<UserType>) {
      state.loading = false;
      state.error = null;
      state.selectedUser = action.payload;
    },
  },
});

export default usersSlice.reducer;

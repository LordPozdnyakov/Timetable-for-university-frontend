import GroupType from "../../Types/GroupType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GroupsState = {
  groups: GroupType[];
  loading: boolean;
  error: string | null;
  selectedGroup: GroupType | null;
};

const initialGroupsState: GroupsState = {
  groups: [],
  loading: false,
  error: null,
  selectedGroup: null,
};

export const groupsSlice = createSlice({
  name: "groups",
  initialState: initialGroupsState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchGroupsSuccess(state, action: PayloadAction<GroupType[]>) {
      state.loading = false;
      state.error = null;
      state.groups = action.payload;
    },
    fetchGroupByIdSuccess(state, action: PayloadAction<GroupType>) {
      state.loading = false;
      state.error = null;
      state.selectedGroup = action.payload;
    },
  },
});

export default groupsSlice.reducer;

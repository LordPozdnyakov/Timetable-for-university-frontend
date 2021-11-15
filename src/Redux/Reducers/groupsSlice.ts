import GroupType from "../../Types/GroupType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GroupsState = {
  groups: GroupType[];
  loading: boolean;
  error: string | null;
  selectedGroup: GroupType | null;
  groupAddedSuccess: boolean;
  addedGroup: GroupType | null;
};

const initialGroupsState: GroupsState = {
  groups: [],
  loading: false,
  error: null,
  selectedGroup: null,
  groupAddedSuccess: false,
  addedGroup: null,
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
    addGroupSuccess(state, action: PayloadAction<GroupType>) {
      state.error = null;
      state.loading = false;
      state.groupAddedSuccess = true;
      state.addedGroup = action.payload;
      state.groups.push(action.payload);
    },
    clearAddGroupData(state) {
      state.error = null;
      state.groupAddedSuccess = false;
      state.addedGroup = null;
    },
    editGroupSuccess(state, action: PayloadAction<GroupType>) {
      state.selectedGroup = action.payload;
      state.error = null;
      state.loading = false;
    },
    deleteGroupSuccess(state, action: PayloadAction<number>) {
      state.groups = state.groups.filter(
        (group: GroupType) => group.id !== action.payload
      );
      state.error = null;
      state.loading = false;
    },
  },
});

export default groupsSlice.reducer;

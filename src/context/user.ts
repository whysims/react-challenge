import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface UserInformationState {
  firstName?: string;
  lastName?: string;
}

const initialState: UserInformationState = {
  firstName: "Breaking",
  lastName: "Bad",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (
      state,
      action: PayloadAction<{ firstName?: string; lastName?: string }>
    ) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { setName } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;

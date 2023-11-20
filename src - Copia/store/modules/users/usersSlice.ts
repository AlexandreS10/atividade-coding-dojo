import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CreateUserType{
  id: string;
  email:string;
  password: string;
}

const initialState: CreateUserType[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<CreateUserType>) => {
      state.push(action.payload);
      return state;
    },
    clear: () => {
      return initialState;
    },
  },
});

export const { create, clear } = usersSlice.actions;
export default usersSlice.reducer;

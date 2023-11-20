import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserType {
  id: string;
  email: string;
  password: string;
}
const initialState: UserType = {
  id: '',
  email: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      return action.payload;
    },
    logout: () => {
      return initialState;
    }
  }
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

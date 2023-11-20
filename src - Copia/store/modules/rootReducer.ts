import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./users/userSlice";
import usersSlice from "./users/usersSlice";

export default combineReducers({
  user: userSlice,
  users: usersSlice,
});

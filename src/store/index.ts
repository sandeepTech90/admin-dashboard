import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import teamsReducer from './teams/teamsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    teams: teamsReducer
  }
});
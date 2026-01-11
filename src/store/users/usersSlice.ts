import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './usersThunks';

export interface User {
    id: string | number;
    name: string;
    teamId: string | number;
    teamName?: string;
}

const usersSlice = createSlice({
    name: 'users',
    initialState: [] as User[],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        removeUser: (state, action) => {
            return state.filter(user => user.id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
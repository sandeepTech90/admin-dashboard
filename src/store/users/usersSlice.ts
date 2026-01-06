import { createSlice } from '@reduxjs/toolkit';

export interface User {
    id: string | number;
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
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { User } from "./usersSlice";

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data as User[];
});

export { fetchUsers };
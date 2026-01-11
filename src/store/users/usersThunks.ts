import { createAsyncThunk } from "@reduxjs/toolkit";
import type { User } from "./usersSlice";

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('http://localhost:4000/users');
    
    const data = await response.json();
    console.log(data);
    return data as User[];
});

export { fetchUsers };
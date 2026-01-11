import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Teams } from "./teamsSlice";

const fetchTeams = createAsyncThunk('teams/fetchTeams', async () => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    const response = await fetch('http://localhost:4000/teams');
    const data = await response.json();
    return data as Teams[];
});

export { fetchTeams };
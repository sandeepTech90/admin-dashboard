import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Teams } from "./teamsSlice";

const fetchTeams = createAsyncThunk('teams/fetchTeams', async () => {
    setTimeout(async () => {
        const response = await fetch('http://localhost:4000/teams');
        const data = await response.json();
        console.log(data);
        return data as Teams[];
    }, 1000);
});

export { fetchTeams };
import { createSlice } from "@reduxjs/toolkit";
import { fetchTeams } from "./teamsThunk";

export interface Teams {
    id: string | number;
    name:  string;
}

const teamsSlice = createSlice({
    name: 'teams',
    initialState: [] as Teams[],
    reducers: {
        // Add team-related reducers here if needed
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTeams.fulfilled, (state, action) => {
            return action.payload;
        });
        // Add team-related reducers here if needed
    }
});

export default teamsSlice.reducer;
import { createSelector } from "@reduxjs/toolkit";
import type { User } from "./usersSlice";

export const users = (state: any) => state.users;
export const teams = (state: any) => state.teams;

export const userWithTeamName = createSelector(
    [users, teams], (users, teams): User[] => {
        const teamMap = new Map<string | number, string>();
        teams.forEach((team: any) => {
            teamMap.set(team.id, team.name);
        });
        return users.map((user: any) => ({
            ...user,
            teamName: teamMap.get(user.teamId) || 'Unknown'
        }));
    }
);
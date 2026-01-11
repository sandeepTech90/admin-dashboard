import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTeams } from "../store/teams/teamsThunk";
import { fetchUsers } from "../store/users/usersThunks";

export const useUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTeams() as any);
        dispatch(fetchUsers() as any);
    }, []);
}

import { useContext } from "react";
import MultiSelectList from "../../components/custom/multi-select-list/index.tsx";
import Users from "../../components/users";
import { useUsers } from "../../hooks/users";
import Products from "./products";
import { AuthContext } from "../../context/auth/auth-provider.tsx";

function Dashboard() {
  const {state} = useContext(AuthContext) || {};
  useUsers();
  return (
    <>
    {state?.isAuthenticated ? <>
    <Users />
    <MultiSelectList />
    <Products />
    </> : <h2>Please log in to view the dashboard.</h2>}</>
  );
}

export default Dashboard
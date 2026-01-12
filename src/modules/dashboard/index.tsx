
import MultiSelectList from "../../components/multi-select-list.tsx/index.tsx";
import Users from "../../components/users";
import { useUsers } from "../../hooks/users";
import Products from "./products";

function Dashboard() {
  useUsers();
  return (
    <>
    <Users />
    <MultiSelectList />
    <Products />
    </>
  );
}

export default Dashboard
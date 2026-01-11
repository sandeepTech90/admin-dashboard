import Users from "../../components/users";
import { useUsers } from "../../hooks/users";

function Dashboard() {
  useUsers();
  return (
    <Users />
  );
}

export default Dashboard
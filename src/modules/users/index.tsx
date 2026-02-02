import { useSelector } from "react-redux";
import { userWithTeamName } from "../../store/users/usersSelector";
import { useEffect } from "react";
import { useUsers } from "../../hooks/users";
import DotLoader from "../../components/loader/dot-loader";

const Users = () => {
  const users = useSelector(userWithTeamName);
  useUsers();
  useEffect(() => {
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} - {user.teamName ? user.teamName : <DotLoader/>}</p>
        </div>
      ))}
    </div>
  )
}

export default Users
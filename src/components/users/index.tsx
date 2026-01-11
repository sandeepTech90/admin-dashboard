import { useSelector } from "react-redux";
import { userWithTeamName } from "../../store/users/usersSelector";

const Users = () => {
  const users = useSelector(userWithTeamName);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} - {user.teamName}</p>
        </div>
      ))}
    </div>
  )
}

export default Users
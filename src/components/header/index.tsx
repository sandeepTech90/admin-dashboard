import { useContext } from 'react'
import './header.css'
import { AuthContext } from '../../context/auth/auth-provider';
import { removeCookie } from '../../utils/cookies';

const Header = () => {
  const {state, dispatch} = useContext(AuthContext) || {};
  
  const handleLogout = () => {
    removeCookie('authToken');
    dispatch?.({type: 'LOGOUT'});
  };

  return (
    <div className="header">
        <h3>Admin Dashboard</h3>
        {state?.user ? <button onClick={handleLogout}>Log Out</button> : 
        <button onClick={() => dispatch?.({type: 'LOGIN', payload: 'User'})}>Log In</button>}
    </div>
  )
}

export default Header
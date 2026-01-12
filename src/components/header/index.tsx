import { useContext } from 'react'
import './header.css'
import { AuthContext } from '../../context/auth/auth-provider';

const Header = () => {
  const {state, dispatch} = useContext(AuthContext) || {};
  return (
    <div className="header">
        <h3>Admin Dashboard</h3>
        {state?.user ? <button onClick={() => {
          dispatch?.({type: 'LOGOUT'});
        }}>Log Out</button> : 
        <button onClick={() => dispatch?.({type: 'LOGIN', payload: 'User'})}>Log In</button>}
    </div>
  )
}

export default Header
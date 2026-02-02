import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/auth-provider";
import { setCookie } from "../../utils/cookies";

const Login = () => {
    const { dispatch } = useContext(AuthContext) || {};
    const navigate = useNavigate();

    const handleLogin = () => {
        // Generate or fetch token from your API
        // const token = `token_${Date.now()}`;
        const token = 'User';
        
        // Store token in cookie
        setCookie('authToken', token);
        
        // Update auth state
        dispatch?.({
            type: 'LOGIN', 
            payload: { user: 'User', token }
        });
        
        // Navigate to dashboard
        navigate('/dashboard');
    }

  return (
    <button onClick={handleLogin}>Log In</button>
  )
}

export default Login
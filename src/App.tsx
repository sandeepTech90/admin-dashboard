import { Provider as StoreProvider } from 'react-redux'
import { store } from './store'
import Header from './components/header'
import './App.css'
import { useContext } from 'react'
import { AuthContext } from './context/auth/auth-provider'
import { Outlet } from 'react-router-dom'

function App() {
  const {state} = useContext(AuthContext) || {};
  
  return (
      <StoreProvider store={store}>
        <div className="app">
          {state?.isAuthenticated ? (
            <>
              <Header />
              <Outlet />
            </>
          ) : (
            // <Navigate to="/login" replace />
            <Outlet/>
          )}
        </div>
      </StoreProvider>
  )
}

export default App

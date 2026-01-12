import { Provider as StoreProvider } from 'react-redux'
import { AuthProvider } from './context/auth/auth-provider'
import { store } from './store'
import Header from './components/header'
import Dashboard from './modules/dashboard'
import './App.css'

function App() {

  return (
    <AuthProvider>
      <StoreProvider store={store}>
        {/* TODO: replace below with router */}
        <div className="app">
          <Header />
          <Dashboard />
        </div>
      </StoreProvider>
    </AuthProvider>
  )
}

export default App

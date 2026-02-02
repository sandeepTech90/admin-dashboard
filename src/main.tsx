import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/auth/auth-provider.tsx'
import { RouterProvider } from 'react-router'
import { router } from './routes/index.tsx'


createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <RouterProvider router={router}/>
    </AuthProvider>
)


import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routes/Routes/Routes'
import 'react-day-picker/dist/style.css'; 
import AuthProvider from './Context/AuthProvider';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
function App() {
  return (
    <div className='max-w-7xl mx-auto'>
       <QueryClientProvider client={queryClient}>
       <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
    </AuthProvider>
    </QueryClientProvider> 
    </div>
  )
}

export default App

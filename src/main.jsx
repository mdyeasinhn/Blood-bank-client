import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import router from './Route/Route.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     <Toaster />
     </div>
    </AuthProvider>
  </StrictMode>,
)

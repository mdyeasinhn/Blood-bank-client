import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import {

  RouterProvider,
} from "react-router-dom";
import router from './Route/Route.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
     </QueryClientProvider>
     <Toaster />
  
    </AuthProvider>
  </StrictMode>,
)

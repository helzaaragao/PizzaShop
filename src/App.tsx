import './global.css'; 
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { Toaster } from '@/components/ui/sonner'


export function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop"></Helmet>
         <RouterProvider router={router}/>
         <Toaster richColors/>
    </HelmetProvider>

    // quando quer fazer forms e validar = hook-form e zod
  
  )
}

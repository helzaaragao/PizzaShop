import './global.css'; 
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from './components/theme/theme-provider';


export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark" >
      <Helmet titleTemplate="%s | pizza.shop"></Helmet>
         <RouterProvider router={router}/>
         <Toaster richColors/>
         </ThemeProvider>
    </HelmetProvider>

    // quando quer fazer forms e validar = hook-form e zod
  
  )
}

import '../global.css'; 
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from './components/theme/theme-provider';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';


export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark" >
      <Helmet titleTemplate="%s | pizza.shop"></Helmet>
         <QueryClientProvider client={queryClient}>
         <RouterProvider router={router}/>
         </QueryClientProvider>
         <Toaster richColors/>
         </ThemeProvider>
    </HelmetProvider>

    // quando quer fazer forms e validar = hook-form e zod
   
  
  )
}

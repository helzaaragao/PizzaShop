import './global.css'; 
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import {Helmet, HelmetProvider} from 'react-helmet-async'


export function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop"></Helmet>
         <RouterProvider router={router}/>
    </HelmetProvider>

    // quando quer fazer forms e validar = hook-form e zod
  
  )
}

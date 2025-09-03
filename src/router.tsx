import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import { DashBoard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Error } from './pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout></AppLayout>,
    // erros gerais
    errorElement: <Error></Error>,
    children: [
      { path: '/', element: <DashBoard></DashBoard> },
      { path: '/orders', element: <Orders></Orders> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: '/sign-in', element: <SignIn></SignIn> },
      { path: '/sign-up', element: <SignUp></SignUp> },
    ],
  },
  {
    // Se o usuário entrar em qualquer endereço que não dê match com os de cima, vai aparecer a página 404
    path: '*',
    element: <NotFound></NotFound>,
  },
])

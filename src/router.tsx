import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/sign-up";
import { Orders } from "./pages/app/orders/orders";
import { DashBoard } from "./pages/app/dashboard/dashboard";
import { NotFound } from "./pages/404";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout></AppLayout>,
        errorElement: <NotFound></NotFound>,
        children: [{path: '/', element: <DashBoard></DashBoard>},
            {path: '/orders', element: <Orders></Orders>}
        ]
    },
    {
        path:'/',
        element: <AuthLayout></AuthLayout>, 
        children: [
            {path: '/sign-in', element: <SignIn></SignIn>}, 
            {path: '/sign-up', element: <SignUp></SignUp>}, 
        
        ],
    },
])
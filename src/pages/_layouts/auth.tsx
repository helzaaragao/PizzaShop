import { Outlet } from "react-router-dom";

export function AuthLayout(){
    return(
        <div>
            <h1>Autentificação</h1>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
        
    )
}
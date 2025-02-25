import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";

export function AccountMenu(){  
    const {data: profile} = useQuery({
        queryKey: ['profile'], 
        queryFn: getProfile,
    })

    const {data: managedRestaurant} = useQuery({
        queryKey: ['managed-restaurant'], 
        queryFn: getManagedRestaurant,
    })

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline"
                  className="flex select-none items-center gap-2"
                >{managedRestaurant?.name}
                    <ChevronDown className="h-4 w-4"></ChevronDown>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>{profile?.name}</span>
                     <span className="text-xs font-normal text-muted-foreground">{profile?.email}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator></DropdownMenuSeparator>
                <DropdownMenuItem>
                    <Building className="mr-2 h-4 w-4"></Building>
                    <span>Perfil da loja</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                    <LogOut className="mr-2 h-4 w-4"></LogOut>
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { Skeleton } from "./ui/skeleton";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogTrigger } from "./ui/dialog";
import { StoreProfileDialog } from "./store-profile-dialog";

export function AccountMenu(){  
    const {data: profile, isLoading: isLoadingProfile} = useQuery({
        queryKey: ['profile'], 
        queryFn: getProfile,
    })

    const {data: managedRestaurant, isLoading: isLoadingManagedRestaurant} = useQuery({
        queryKey: ['managed-restaurant'], 
        queryFn: getManagedRestaurant,
    })

    return(
        <Dialog>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline"
                  className="flex select-none items-center gap-2"
                >{isLoadingManagedRestaurant ? ( <Skeleton className="h-4 w-40"></Skeleton>
                ) : managedRestaurant?.name}
                    <ChevronDown className="h-4 w-4"></ChevronDown>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    {isLoadingProfile ? (
                        <div className="space-y-1.5">
                            <Skeleton className="h-4 w-32"></Skeleton>
                            <Skeleton className="h-3 w-24"></Skeleton>
                        </div>
                    ) : (
                        <>
                        <span>{profile?.name}</span>
                        <span className="text-xs font-normal text-muted-foreground">{profile?.email}</span>
                        </>
                    )}
                </DropdownMenuLabel>
                <DropdownMenuSeparator></DropdownMenuSeparator>
                <DialogTrigger asChild>
                    <DropdownMenuItem>
                        <Building className="mr-2 h-4 w-4"></Building>
                        <span>Perfil da loja</span>
                    </DropdownMenuItem>
                </DialogTrigger>
                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                    <LogOut className="mr-2 h-4 w-4"></LogOut>
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <StoreProfileDialog></StoreProfileDialog>
        </Dialog>
    )
}
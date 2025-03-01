import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableRow, TableCell } from "@/components/ui/table";
import { Search, ArrowRight, X } from "lucide-react";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
    return(
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                            <Button variant="outline" size="xs">
                            <Search className="h-3 w-3"></Search>
                            <span className="sr-only">Detalhes do pedido</span>
                            </Button>
                    </DialogTrigger>
                     <OrderDetails></OrderDetails>
                </Dialog>
                                </TableCell>
                                <TableCell className="font-mono text-xs font-medium">
                                    32345sa322s4554ssddh
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    há 15 minutos
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                         <span className="font-medium text-muted-foreground">Pendente</span>
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium">
                                    Helza Batista Aragão
                                </TableCell>
                                <TableCell className="font-medium">
                                    R$ 149,98
                                </TableCell>
                                <TableCell>
                                        <Button variant="outline" size="xs">
                                            <ArrowRight className="mr-2 h-3 w-3"></ArrowRight>
                                            Aprovar
                                        </Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="xs">
                                        <X className="mr-2 h-3 w-3"></X>
                                        Cancelar
                                    </Button>
      </TableCell>
    </TableRow>
    )
}
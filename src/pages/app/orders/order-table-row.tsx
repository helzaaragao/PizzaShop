import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableRow, TableCell } from "@/components/ui/table";
import { Search, ArrowRight, X } from "lucide-react";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "@/components/order-status";

import {formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'

export interface OrderTableRowProps{
    order: {
        orderId: string;
        createdAt: string;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
    }
}

export function OrderTableRow({order}: OrderTableRowProps) {
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
                     <OrderDetails orderId={order.orderId}></OrderDetails>
                </Dialog>
                                </TableCell>
                                <TableCell className="font-mono text-xs font-medium">
                                    {order.orderId}
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                   {formatDistanceToNow(order.createdAt, {
                                    locale: ptBR, 
                                    addSuffix: true,
                                   })}
                                </TableCell>
                                <TableCell>
                                    <OrderStatus status={order.status}></OrderStatus>
                                </TableCell>
                                <TableCell className="font-medium">
                                    {order.customerName}
                                </TableCell>
                                <TableCell className="font-medium">
                                    {order.total.toLocaleString('pt-BR', {
                                        style: 'currency', 
                                        currency: 'BRL', 
                                    })}
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
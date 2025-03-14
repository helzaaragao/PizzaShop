import { ChevronsLeft, ChevronsRight } from "lucide-react"
import { Button } from "./ui/button"

export interface PaginationProps{
    pageIndex: number
    totalCount: number
    perPage: number
    onPageChange: (pageIndex: number) => Promise<void> | void
}

export function Pagination({pageIndex, perPage, totalCount, onPageChange}: PaginationProps) {
    const pages = Math.ceil(totalCount / perPage) || 1
    // O || 1 garante que o valor mínimo de páginas seja 1, evitando que o resultado seja 0 em casos onde não há itens ou a divisão resulta em menos de uma página.
    return(
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total de {totalCount} item(s)
            </span>
            <div className="flex items-center gap-4 lg:gap-8">
                <div className="text-sm font-medium">
                    Página {pageIndex + 1} de {pages}
                </div>
                <div className="flex items-center gap-2">
                    <Button 
                        onClick={() => onPageChange(0)}
                    variant="outline" className="h-8 w-8 p-8"
                    disabled={pageIndex === 0}
                    >
                        <ChevronsLeft className="h-4 w-4"></ChevronsLeft>
                        <span className="sr-only">Primeira página</span>
                    </Button>
                    <Button onClick={() => onPageChange(pageIndex - 1)}
                      disabled={pageIndex === 0}
                    variant="outline" className="h-8 w-8 p-8">
                        <ChevronsLeft className="h-4 w-4"></ChevronsLeft>
                        <span className="sr-only">Página anterior</span>
                    </Button>
                    <Button onClick={() => onPageChange(pageIndex + 1)} 
                     disabled={pages <= pageIndex + 1}
                    variant="outline" className="h-8 w-8 p-8">
                        <ChevronsRight className="h-4 w-4"></ChevronsRight>
                        <span className="sr-only">Próxima página</span>
                    </Button>
                    <Button onClick={() => onPageChange(pages - 1)}
                    variant="outline" className="h-8 w-8 p-8"
                    disabled={pages <= pageIndex + 1}
                    >
                        <ChevronsRight className="h-4 w-4"></ChevronsRight>
                        <span className="sr-only">Última página</span>
                    </Button>
                </div>
            </div>
        </div>
    )


}
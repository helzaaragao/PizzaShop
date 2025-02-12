import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function RevenueChart(){
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Receita no período</CardTitle>
                    <CardDescription>Receita diário no período</CardDescription>
                </div>
            </CardHeader>
        </Card>
    )
}
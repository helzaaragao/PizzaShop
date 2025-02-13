import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";
import {ResponsiveContainer, Pie , PieChart, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip } from 'recharts'
import colors from 'tailwindcss/colors'

const data = [
    {product: 'Pepperoni', amount: 200}, 
    {product: 'Mussarela', amount: 1200}, 
    {product: 'Marguerita', amount: 3000}, 
    {product: 'Quatro Queijos', amount: 400}, 
    {product: 'Frango Catupiri', amount: 1400},

]

export function PopularProductsChart(){
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Produtos populares</CardTitle>
                    <BarChart className="h-4 w-4 text-muted-foreground"></BarChart>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%"height={240}>
                    <PieChart style={{fontSize: 12}}>
                        <Pie data={data} dataKey="amount" nameKey="produt"></Pie>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

        // 04:53 - aula 7 
    )
}
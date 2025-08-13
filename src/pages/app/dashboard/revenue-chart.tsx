import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar28 } from "@/components/ui/date-range-picker";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import {ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts'
import colors from 'tailwindcss/colors'


// Aula 10 - 9:19 minutos para acabar
export function RevenueChart(){
    const {data: dailyRevenueInPeriod} = useQuery({
        queryFn: getDailyRevenueInPeriod,
        queryKey: ['metrics', 'daily-revenue-in-period'],
    })
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Receita no período</CardTitle>
                    <CardDescription>Receita diário no período</CardDescription>
                </div>
                <div className="flex items-center gap-3">
                    <Label>Período</Label>
                    <Calendar28></Calendar28>
                </div>
            </CardHeader>
            <CardContent>
                {dailyRevenueInPeriod && (
                    <ResponsiveContainer width="100%"height={240}>
                    <LineChart data={dailyRevenueInPeriod} style={{fontSize: 12}}>
                        <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16}></XAxis>
                        <YAxis stroke="#888" axisLine={false} tickLine={false} width={80} tickFormatter={(value:number) => value.toLocaleString('pt-BR',{ style: 'currency', currency:'BRL',})}></YAxis>
                        <CartesianGrid vertical={false} className="stroke-muted"></CartesianGrid>
                        <Line stroke={colors.violet[500]} type="linear" strokeWidth={2} dataKey="receipt"></Line>

                       
                    </LineChart>
                </ResponsiveContainer>
                )}
            </CardContent>
        </Card>
    )
}
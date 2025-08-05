import { api } from "@/lib/axios";

export interface GetMonthOrdersAmountResponse{
    amount: number
    diffFromLastMonth: number
}
export async function getMonthOrdersAmount() {
    const response = await api.get<GetMonthOrdersAmountResponse>('/metrics/month-orders-amount',)
    return response.data
}
// aula 9 - 7:28 foi onde parei
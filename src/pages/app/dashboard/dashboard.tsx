import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./month-revenue-card";
import { MonthOrdersAmountCard } from "./month-orders-amount-card";
import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MonthCanceledOrdersAmountCard } from "./month-canceled-orders-amount-card";
import { RevenueChart } from "./revenue-chart";
import { PopularProductsChart } from "./popular-products-chart";

export function DashBoard(){
    return (
      <>
    <Helmet title="Dashboard"></Helmet>
    <div className="flex flex-col gap-4">
        <h1 className="text-3xl tracking-tighter font-bold">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard></MonthRevenueCard>
         <MonthOrdersAmountCard></MonthOrdersAmountCard>
         <DayOrdersAmountCard></DayOrdersAmountCard>
         <MonthCanceledOrdersAmountCard></MonthCanceledOrdersAmountCard>
        </div>
        <div className="grid grid-cols-9 gap-4">
            <RevenueChart></RevenueChart>
            <PopularProductsChart></PopularProductsChart>

        </div>
    </div>
    
   
      </>
    )
}
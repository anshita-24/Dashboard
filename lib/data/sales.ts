import type { AllSales } from "@/types/sales";

/**
 * Mock sales data (monthly) for 2022–2024.
 * Values are random but realistic for demonstration.
 */
export const salesData: AllSales = [
  {
    year: 2022,
    data: [
      { month: "Jan", amount: 12000 },
      { month: "Feb", amount: 13500 },
      { month: "Mar", amount: 14200 },
      { month: "Apr", amount: 15000 },
      { month: "May", amount: 16050 },
      { month: "Jun", amount: 15800 },
      { month: "Jul", amount: 17000 },
      { month: "Aug", amount: 16500 },
      { month: "Sep", amount: 17500 },
      { month: "Oct", amount: 18000 },
      { month: "Nov", amount: 19000 },
      { month: "Dec", amount: 21000 }
    ]
  },
  {
    year: 2023,
    data: [
      { month: "Jan", amount: 15000 },
      { month: "Feb", amount: 15500 },
      { month: "Mar", amount: 16500 },
      { month: "Apr", amount: 17200 },
      { month: "May", amount: 18000 },
      { month: "Jun", amount: 17800 },
      { month: "Jul", amount: 18900 },
      { month: "Aug", amount: 19500 },
      { month: "Sep", amount: 20000 },
      { month: "Oct", amount: 21000 },
      { month: "Nov", amount: 22000 },
      { month: "Dec", amount: 23500 }
    ]
  },
  {
    year: 2024,
    data: [
      { month: "Jan", amount: 16000 },
      { month: "Feb", amount: 16800 },
      { month: "Mar", amount: 17500 },
      { month: "Apr", amount: 18500 },
      { month: "May", amount: 19500 },
      { month: "Jun", amount: 20500 },
      { month: "Jul", amount: 21500 },
      { month: "Aug", amount: 22500 },
      { month: "Sep", amount: 23000 },
      { month: "Oct", amount: 24000 },
      { month: "Nov", amount: 25000 },
      { month: "Dec", amount: 26500 }
    ]
  }
];

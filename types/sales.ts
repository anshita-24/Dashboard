export type MonthlySale = { month: string; amount: number };
export type YearSales = { year: number; data: MonthlySale[] };
export type AllSales = YearSales[];

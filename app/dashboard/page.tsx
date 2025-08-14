'use client';

import { SalesChartPanel } from "@/components/organisms/SalesChartPanel";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p className="text-sm opacity-80">View sales for 2022, 2023, and 2024. Try filters and chart type switch.</p>
      <SalesChartPanel />
    </div>
  );
}

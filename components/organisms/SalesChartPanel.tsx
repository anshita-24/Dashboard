'use client';

import * as React from "react";
import { salesData as initial } from "@/lib/data/sales";
import type { YearSales } from "@/types/sales";
import { SalesChart } from "@/components/charts/SalesChart";
import { ChartToolbar } from "@/components/molecules/ChartToolbar";

export function SalesChartPanel() {
  const [all, setAll] = React.useState<YearSales[]>(initial);
  const [year, setYear] = React.useState<number>(2024);
  const [chart, setChart] = React.useState<"bar" | "line" | "area" | "pie">("bar");
  const [threshold, setThreshold] = React.useState<number>(0);

  const selected = React.useMemo(
    () => all.find((y) => y.year === year) ?? all[0],
    [all, year]
  );

  const filtered = React.useMemo(
    () => selected.data.filter(d => d.amount >= threshold),
    [selected, threshold]
  );

  const years = React.useMemo(() => all.map(a => a.year).sort(), [all]);

  async function loadFromApi() {
    // This calls the app route /api/sales which returns the same mock data.
    const res = await fetch("/api/sales");
    const json = await res.json();
    setAll(json.sales);
  }

  return (
    <section className="rounded-2xl border p-4 md:p-6 shadow-sm">
      <div className="mb-4">
        <ChartToolbar
          year={year}
          onYearChange={setYear}
          chart={chart}
          onChartChange={setChart}
          threshold={threshold}
          onThresholdChange={setThreshold}
          onLoadFromApi={loadFromApi}
          years={years}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border p-4">
          <SalesChart data={filtered} type={chart} />
        </div>
        <aside className="rounded-2xl border p-4 space-y-2 text-sm">
          <h3 className="font-semibold">Summary</h3>
          <p>Year: <span className="font-mono">{selected.year}</span></p>
          <p>Months shown: <span className="font-mono">{filtered.length}</span></p>
          <p>
            Threshold: <span className="font-mono">{threshold}</span>
          </p>
          <p>
            Total (filtered):{" "}
            <span className="font-mono">
              {filtered.reduce((a, b) => a + b.amount, 0).toLocaleString()}
            </span>
          </p>
          <p className="opacity-70">
            Tip: Try switching chart type, changing year, or loading data via the mock API.
          </p>
        </aside>
      </div>
    </section>
  );
}

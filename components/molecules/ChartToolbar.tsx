'use client';

import * as React from "react";
import { Input } from "@/components/atoms/Input";
import { Select } from "@/components/atoms/Select";
import { Button } from "@/components/atoms/Button";

type Props = {
  year: number;
  onYearChange: (y: number) => void;
  chart: "bar" | "line" | "area" | "pie";
  onChartChange: (c: Props["chart"]) => void;
  threshold: number;
  onThresholdChange: (t: number) => void;
  onLoadFromApi: () => void;
  years: number[];
};

export function ChartToolbar({
  year, onYearChange, chart, onChartChange,
  threshold, onThresholdChange, onLoadFromApi, years
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-5 items-end">
      <div>
        <label className="text-xs block mb-1">Year</label>
        <Select
          value={String(year)}
          onChange={(e) => onYearChange(Number(e.target.value))}
        >
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </Select>
      </div>

      <div>
        <label className="text-xs block mb-1">Chart Type</label>
        <Select value={chart} onChange={(e) => onChartChange(e.target.value as any)}>
          <option value="bar">Bar</option>
          <option value="line">Line</option>
          <option value="area">Area</option>
          <option value="pie">Pie</option>
        </Select>
      </div>

      <div>
        <label className="text-xs block mb-1">Sales Threshold</label>
        <Input
          type="number"
          min={0}
          value={threshold}
          onChange={(e) => onThresholdChange(Number(e.target.value))}
          placeholder="e.g., 18000"
        />
      </div>

      <div className="md:col-span-2 flex gap-2">
        <Button onClick={onLoadFromApi} title="Fetch from /api/sales (mock)">
          Load from API (mock)
        </Button>
        <Button variant="ghost" onClick={() => onThresholdChange(0)}>
          Reset Filter
        </Button>
      </div>
    </div>
  );
}

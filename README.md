# Atomic Sales Dashboard (Next.js 15 + TS + Tailwind + Recharts)

A minimal dashboard built with **Next.js (App Router) + TypeScript + Tailwind CSS + Recharts**,
organized using the **Atomic Design** principle. It visualizes monthly sales for **2022–2024** with
mock data and demonstrates:

- Custom **Sales Threshold** filter (user input)
- **Multiple chart types**: Bar, Line, Area, Pie (switchable)
- **API route** (`/api/sales`) that returns the same mock data to simulate integration
- Atomic structure: `atoms` → `molecules` → `organisms` → page

> Note: You asked for “random Kaggle sales”; this project uses realistic **mock data** for a zero-dependency demo.
> Swap the mock with real data from an API or a processed Kaggle dataset in `app/api/sales/route.ts`.

## Tech Stack

- Next.js 15 (using `next@latest`)
- TypeScript
- Tailwind CSS
- Recharts
- Atomic folders under `components/`

## Getting Started

```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Open
http://localhost:3000
```

You’ll see a **Home** page with a link to the **Dashboard**. The chart panel lives on `/dashboard`.

## Project Structure

```
app/
  api/sales/route.ts          # Mock API returning sales
  dashboard/page.tsx          # Dashboard page (charts + controls)
  layout.tsx                  # Root layout
  page.tsx                    # Landing page
  globals.css                 # Tailwind styles

components/
  atoms/                      # Smallest building blocks
    Button.tsx
    Input.tsx
    Select.tsx
  molecules/                  # Combined atoms
    ChartToolbar.tsx
  organisms/                  # Page-ready sections
    SalesChartPanel.tsx
  charts/
    SalesChart.tsx            # Recharts wrapper

lib/
  data/sales.ts               # Mock sales data (2022–2024)

types/
  sales.ts                    # Type definitions

tailwind.config.ts
postcss.config.js
next.config.ts
tsconfig.json
```

## Features & Enhancements

- **Custom Filter Input**: Set a sales threshold; months below it are hidden.
- **Multiple Chart Types**: Switch between Bar, Line, Area, and Pie charts.
- **API Integration (Mock)**: Click **Load from API** to fetch the same data via `/api/sales`.

### Future Enhancements

- **Real API**: Replace the handler in `app/api/sales/route.ts` to fetch from your backend or a public API.
- **More Chart Variants**: Add stacked bars, grouped series, comparisons between years, etc.
- **Persisted Settings**: Save user selections (chart type, year, threshold) in URL or localStorage.
- **Responsive Tables**: Add a data table view with sorting/paging.
- **Auth & Roles**: Lock dashboard behind authentication.

## Atomic Design Notes

- **Atoms**: `Button`, `Input`, `Select`
- **Molecules**: `ChartToolbar` (composes atoms)
- **Organisms**: `SalesChartPanel` (molecule + chart + summary)
- **Pages**: `app/dashboard/page.tsx`

## How to Push to GitHub

```bash
# Initialize git and push to your repo
git init
git add .
git commit -m "feat: atomic sales dashboard (Next.js + TS + Tailwind + Recharts)"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## License

MIT — do whatever you like; attribution appreciated.

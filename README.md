# Atomic Sales Dashboard

A minimal dashboard built with **Next.js (App Router) + TypeScript + Tailwind CSS + Recharts**,
organized using the **Atomic Design** principle. It visualizes monthly sales for **2022–2024** with
mock data and demonstrates:

- Custom **Sales Threshold** filter (user input)
- **Multiple chart types**: Bar, Line, Area, Pie (switchable)
- **API route** (`/api/sales`) that returns the same mock data to simulate integration
- Atomic structure: `atoms` → `molecules` → `organisms` → page


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


```

## Features & Enhancements

- **Custom Filter Input**: Set a sales threshold; months below it are hidden.
- **Multiple Chart Types**: Switch between Bar, Line, Area, and Pie charts.
- **API Integration (Mock)**: Click **Load from API** to fetch the same data via `/api/sales`.



```

## License

MIT — do whatever you like; attribution appreciated.

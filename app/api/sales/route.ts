import { NextResponse } from "next/server";
import { salesData } from "@/lib/data/sales";

export async function GET() {
  return NextResponse.json({ sales: salesData });
}

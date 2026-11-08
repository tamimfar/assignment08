"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 650 },
  { month: "Mar", sales: 500 },
  { month: "Apr", sales: 850 },
  { month: "May", sales: 700 },
  { month: "Jun", sales: 1000 },
];

export default function AnalyticsChart() {
  return (
    <div className="w-full rounded-xl border bg-card p-5">
      <h2 className="mb-5 text-lg font-semibold">
        Monthly Sales Analytics
      </h2>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="sales"
              fill="#3b82f6"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
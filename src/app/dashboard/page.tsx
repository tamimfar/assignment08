"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { useState } from "react";
import LazyAnalyticsChart from "@/components/dashboard/LazyAnalyticsChart";
import LazyUserInsights from "@/components/dashboard/LazyUserInsights";

const stats = [
  { title: "Total Users", value: "1,250", change: "+12.5%" },
  { title: "Total Products", value: "1,500", change: "+8.2%" },
  { title: "Total Orders", value: "850", change: "+15.3%" },
  { title: "Total Revenue", value: "$25,500", change: "+10.8%" },
];

export default function DashboardPage() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-slate-950">
      <Sidebar />

      <div className="md:ml-64">
        <Header />

        <main className="p-5 md:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white">
              Dashboard Overview
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Welcome back! Here is what's happening today.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >
                <p className="text-sm text-slate-400">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {stat.value}
                </h2>

                <p className="mt-3 text-sm text-emerald-400">
                  {stat.change} from last month
                </p>
              </div>
            ))}
          </div>
           <h1>Profiler Test</h1>

      <p className="text-amber-50">Count: {count}</p>
      <button className="bg-amber-50" onClick={() => setCount(count + 1)}>Increment</button>
      <div className="m-3 p-3">
            <LazyAnalyticsChart />
      </div>
      <div>
        <LazyUserInsights />
      </div>
        </main>
      </div>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";

const AnalyticsChart = dynamic(
  () => import("./AnalyticsChart"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[350px] items-center justify-center rounded-xl border">
        Loading analytics chart...
      </div>
    ),
  }
);

export default function LazyAnalyticsChart() {
  return <AnalyticsChart />;
}
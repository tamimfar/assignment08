"use client";

import dynamic from "next/dynamic";

const UserInsights = dynamic(() => import("./UserInsights"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border p-6">
      Loading user insights...
    </div>
  ),
});

export default function LazyUserInsights() {
  return <UserInsights />;
}
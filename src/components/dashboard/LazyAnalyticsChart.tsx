
"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// Dynamically import AnalyticsChart
const AnalyticsChart = dynamic(
  () => import("./AnalyticsChart"),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-[430px] items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-sm text-slate-300"
        role="status"
        aria-live="polite"
      >
        Loading analytics chart...
      </div>
    ),
  }
);

export default function LazyAnalyticsChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Load chart when it approaches the viewport
  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    // Fallback for browsers without IntersectionObserver
    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[430px]"
      aria-busy={!shouldLoad}
    >
      {shouldLoad ? (
        <AnalyticsChart />
      ) : (
        <div
          className="flex h-[430px] items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-sm text-slate-300"
          role="status"
          aria-live="polite"
        >
          Analytics chart will load when you scroll down.
        </div>
      )}
    </div>
  );
}

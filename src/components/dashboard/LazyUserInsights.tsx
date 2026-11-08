
"use client";

export default function UserInsights() {
  return (
    <section
      aria-labelledby="user-insights-title"
      className="rounded-xl border border-slate-700 bg-slate-900 p-6 text-slate-100"
    >
      {/* Heading */}
      <div className="flex items-center gap-4">
        {/* User Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-800 bg-sky-950 text-sky-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="10" cy="7" r="4" />
            <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>

        <div>
          <h2
            id="user-insights-title"
            className="text-lg font-semibold text-white"
          >
            User Insights
          </h2>

          <p className="mt-1 text-sm text-slate-300">
            Overview of your user activity.
          </p>
        </div>
      </div>

      {/* User Statistics */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-700 bg-slate-800 p-5">
          <p className="text-sm font-medium text-slate-300">
            Total Users
          </p>

          <p className="mt-3 text-3xl font-bold text-white">
            1,500
          </p>

          <p className="mt-2 text-sm text-slate-300">
            Registered users
          </p>
        </div>

        <div className="rounded-lg border border-slate-700 bg-slate-800 p-5">
          <p className="text-sm font-medium text-slate-300">
            User Insights
          </p>

          <p className="mt-3 text-base font-semibold text-white">
            User Activity Overview
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            Monitor your registered users and track user activity
            from the dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}

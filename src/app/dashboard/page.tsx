
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import LazyAnalyticsChart from "@/components/dashboard/LazyAnalyticsChart";
import LazyUserInsights from "@/components/dashboard/LazyUserInsights";

// Static dashboard data
const stats = [
  {
    title: "Total Users",
    value: "1,250",
    change: "+12.5%",
  },
  {
    title: "Total Products",
    value: "1,500",
    change: "+8.2%",
  },
  {
    title: "Total Orders",
    value: "850",
    change: "+15.3%",
  },
  {
    title: "Total Revenue",
    value: "$25,500",
    change: "+10.8%",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Sidebar />

      <div className="md:ml-64">
        <Header />

        <main className="p-5 md:p-8">
          {/* Dashboard heading */}
          <section className="mb-8">
            <h1 className="text-2xl font-bold text-white">
              Dashboard Overview
            </h1>

            <p className="mt-2 text-sm text-slate-300">
              Welcome back! Here is what's happening today.
            </p>
          </section>

          {/* Statistics cards */}
          <section
            aria-label="Dashboard statistics"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map((stat) => (
              <article
                key={stat.title}
                className="rounded-xl border border-slate-700 bg-slate-900 p-6"
              >
                <p className="text-sm font-medium text-slate-300">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {stat.value}
                </h2>

                <p className="mt-3 text-sm font-medium text-emerald-300">
                  {stat.change} from last month
                </p>
              </article>
            ))}
          </section>

          {/* Analytics chart */}
          <section
            aria-label="Analytics chart"
            className="mt-8 rounded-xl border border-slate-700 bg-slate-900 p-4 md:p-6"
          >
            <LazyAnalyticsChart />
          </section>

          {/* User insights */}
          <section
            aria-label="User insights"
            className="mt-8"
          >
            <LazyUserInsights />
          </section>
        </main>
      </div>
    </div>
  );
}

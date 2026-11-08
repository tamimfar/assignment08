
"use client";

const data = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 650 },
  { month: "Mar", sales: 500 },
  { month: "Apr", sales: 850 },
  { month: "May", sales: 700 },
  { month: "Jun", sales: 1000 },
];

const maxSales = Math.max(...data.map((item) => item.sales));

export default function AnalyticsChart() {
  return (
    <section className="w-full rounded-xl border border-slate-700 bg-slate-900 p-5">
      {/* Chart heading */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Monthly Sales Analytics
        </h2>

        <p className="mt-1 text-sm text-slate-300">
          Monthly sales performance overview.
        </p>
      </div>

      {/* Lightweight Bar Chart */}
      <div
        role="img"
        aria-label={`Monthly sales chart: ${data
          .map((item) => `${item.month}: ${item.sales}`)
          .join(", ")}`}
        className="grid h-[300px] grid-cols-6 gap-3 border-b border-l border-slate-700 px-3 pt-4"
      >
        {data.map((item) => {
          const height = (item.sales / maxSales) * 100;

          return (
            <div
              key={item.month}
              className="flex min-w-0 flex-col items-center gap-2"
            >
              {/* Sales value */}
              <span
                aria-hidden="true"
                className="text-xs font-semibold text-slate-200"
              >
                {item.sales.toLocaleString()}
              </span>

              {/* Bar */}
              <div className="flex w-full flex-1 items-end justify-center">
                <div
                  title={`${item.month}: ${item.sales} sales`}
                  className="w-full max-w-14 rounded-t-md bg-blue-500 transition-colors hover:bg-blue-400"
                  style={{
                    height: `${height}%`,
                  }}
                />
              </div>

              {/* Month label */}
              <span className="pb-2 text-xs font-medium text-slate-300">
                {item.month}
              </span>
            </div>
          );
        })}
      </div>

      {/* Chart footer */}
      <div className="mt-5 flex items-center gap-2">
        <span
          aria-hidden="true"
          className="h-3 w-3 rounded-sm bg-blue-500"
        />

        <span className="text-sm text-slate-300">
          Total monthly sales
        </span>
      </div>

      {/* Accessible data table */}
      <table className="sr-only">
        <caption>Monthly sales data</caption>
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.month}>
              <td>{item.month}</td>
              <td>{item.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

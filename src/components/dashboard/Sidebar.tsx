
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
} from "lucide-react";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Products", href: "/dashboard/products", icon: Package },
  { name: "Orders", href: "#", icon: ShoppingCart },
  { name: "Analytics", href: "#", icon: BarChart3 },
  { name: "Settings", href: "#", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed inset-y-0 left-0 z-20 w-64 flex-col border-r border-slate-800 bg-slate-950 p-5 text-white">
      <h2 className="mb-10 text-2xl font-bold">
        Admin<span className="text-blue-500">Pro</span>
      </h2>

      <p className="mb-4 text-xs font-semibold uppercase text-slate-500">
        Main Menu
      </p>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition hover:bg-slate-800 ${
                item.name === "Overview"
                  ? "bg-blue-600 text-white"
                  : "text-slate-400"
              }`}
            >
              <Icon size={19} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-xl bg-slate-900 p-4">
        <p className="font-semibold">Admin Account</p>
        <p className="mt-1 text-xs text-slate-400">
          admin@adminpro.com
        </p>
      </div>
    </aside>
  );
}

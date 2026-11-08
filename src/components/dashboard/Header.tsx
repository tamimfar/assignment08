import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950 px-4 md:px-8">
      <div>
        <h2 className="text-lg font-semibold text-white">
          Overview
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button
          aria-label="Search"
          className="text-slate-400 hover:text-white"
        >
          <Search size={20} />
        </button>

        <div className="relative text-slate-400">
          <Bell size={20} />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          A
        </div>
      </div>
    </header>
  );
}

"use client";

import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useVirtualizer } from "@tanstack/react-virtual";

type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "User" | "Editor";
  status: "Active" | "Inactive";
};

// 1,500 mock users
const users: User[] = Array.from({ length: 1500 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: ["Admin", "User", "Editor"][index % 3] as User["role"],
  status: index % 2 === 0 ? "Active" : "Inactive",
}));

// Memoized user row
const UserRow = memo(function UserRow({ user }: { user: User }) {
  return (
    <div
      className="grid grid-cols-4 items-center border-b border-slate-200 px-5 py-4 text-sm text-slate-900 dark:border-slate-700 dark:text-slate-100"
      style={{ height: 60 }}
    >
      <span className="font-medium">{user.name}</span>

      <span className="text-slate-600 dark:text-slate-300">
        {user.email}
      </span>

      <span>{user.role}</span>

      <span
        className={
          user.status === "Active"
            ? "font-medium text-green-700 dark:text-green-400"
            : "font-medium text-red-700 dark:text-red-400"
        }
      >
        {user.status}
      </span>
    </div>
  );
});

export default function UsersTable() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  // Debounced search (300ms)
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDebouncedSearch(search);
      timerRef.current = null;
    }, 300);

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [search]);

  // Memoized filtering
  const filteredUsers = useMemo(() => {
    const query = debouncedSearch.toLowerCase().trim();

    if (!query) return users;

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }, [debouncedSearch]);

  // Virtualization
  const rowVirtualizer = useVirtualizer({
    count: filteredUsers.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 60,
    overscan: 8,
  });

  // Memoized search handler
  const handleSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  // RAF-based scroll optimization
  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;

      const element = parentRef.current;

      if (!element) return;

      const maxScroll = element.scrollHeight - element.clientHeight;

      const progress =
        maxScroll > 0
          ? (element.scrollTop / maxScroll) * 100
          : 0;

      setScrollProgress(progress);
    });
  }, []);

  // Cleanup pending animation frame
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  return (
    <section className="ml-0 space-y-5 md:ml-64">
      {/* Page heading and search */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="rounded-lg bg-slate-950 px-5 py-3">
          <h1 className="text-2xl font-bold text-white">
            Users Management
          </h1>

          <p className="text-sm text-slate-300">
            Manage and monitor all users.
          </p>
        </div>

        <input
          type="text"
          value={search}
          onChange={(event) => handleSearch(event.target.value)}
          placeholder="Search users..."
          aria-label="Search users"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 sm:max-w-xs dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400"
        />
      </div>

      {/* Users table container */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
        {/* Table header */}
        <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-100 px-5 py-4 text-sm font-semibold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
          <span>Name</span>
          <span>Email</span>
          <span>Role</span>
          <span>Status</span>
        </div>

        {/* Scroll progress indicator */}
        <div
          className="h-1 w-full overflow-hidden bg-slate-200 dark:bg-slate-700"
          aria-hidden="true"
        >
          <div
            className="h-full bg-blue-600 transition-none"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Virtualized scroll container */}
        <div
          ref={parentRef}
          onScroll={handleScroll}
          className="h-[500px] overflow-auto bg-white dark:bg-slate-900"
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const user = filteredUsers[virtualRow.index];

              return (
                <div
                  key={user.id}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  <UserRow user={user} />
                </div>
              );
            })}
          </div>

          {filteredUsers.length === 0 && (
            <p className="p-8 text-center text-sm text-slate-600 dark:text-slate-300">
              No users found.
            </p>
          )}
        </div>

        {/* Table footer */}
        <div className="border-t border-slate-200 px-5 py-3 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
          Showing {filteredUsers.length} of {users.length} users
        </div>
      </div>
    </section>
  );
}

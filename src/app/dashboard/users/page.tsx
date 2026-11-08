
import UsersTable from "@/components/dashboard/UsersTable";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function UsersPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="min-w-0 flex-1">
        <Header />

        <div className="bg-slate-950">
          <UsersTable />
        </div>
      </main>
    </div>
  );
}

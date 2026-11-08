
import ProductsTable from "@/components/dashboard/ProductsTable";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="min-w-0 flex-1">
        <Header />

        <div className="p-6">
          <ProductsTable />
        </div>
      </main>
    </div>
  );
}

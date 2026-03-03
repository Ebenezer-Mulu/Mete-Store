import DashboardCards from "app/components/admin/dashboardCards";
import SalesChart from "app/components/admin/salesChart";
import prisma from "app/lib/prisma";

export const revalidate = 0;

export default async function AdminPage() {
  const products = await prisma.product.count();
  const categories = await prisma.category.count();
  const users = await prisma.user.count();

  const lowStock = await prisma.product.count({
    where: {
      stock: { lt: 5 },
    },
  });

  const recentProducts = await prisma.product.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
  });

  const stats = [
    { title: "Products", value: products },
    { title: "Categories", value: categories },
    { title: "Users", value: users },
    { title: "Low Stock", value: lowStock },
  ];

  // Fake chart data (replace later with real sales aggregation)
  const chartData = recentProducts.map((p) => ({
    date: new Date(p.createdAt).toLocaleDateString(),
    total: p.price,
  }));

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      <DashboardCards stats={stats} />

      <SalesChart data={chartData} />
    </div>
  );
}

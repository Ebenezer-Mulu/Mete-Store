import Link from "next/link";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Products", path: "/admin/products" },
    { name: "Category", path: "/admin/category" },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg p-6 space-y-6 max-w-5xl mx-auto px-6 py-12 mt-10">
      <nav className="space-y-3">
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="block text-gray-600 hover:text-black"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default function LowStock({ products }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-red-500">
        Low Stock Alert
      </h2>

      {products.length === 0 ? (
        <p>No low stock products 🎉</p>
      ) : (
        <ul className="space-y-2">
          {products.map((product: any) => (
            <li key={product.id} className="flex justify-between">
              <span>{product.name}</span>
              <span className="text-red-500">{product.stock} left</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
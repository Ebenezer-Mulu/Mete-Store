export default function RecentOrders({ orders }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th>ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: any) => (
            <tr key={order.id} className="border-b">
              <td>{order.id.slice(0, 6)}</td>
              <td>{order.user?.email}</td>
              <td>${order.total}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
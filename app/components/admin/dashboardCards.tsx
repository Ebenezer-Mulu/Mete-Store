export default function DashboardCards({ stats }: any) {

  return (
    <div className="grid md:grid-cols-4 gap-6">

      {stats.map((item: any) => (
        <div
          key={item.title}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <p className="text-gray-500 text-sm">
            {item.title}
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {item.value}
          </h2>
        </div>
      ))}

    </div>
  )
}
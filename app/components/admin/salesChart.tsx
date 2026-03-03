"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function SalesChart({ data }: any) {

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-lg font-semibold mb-4">
        Sales Analytics
      </h2>

      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="total"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}
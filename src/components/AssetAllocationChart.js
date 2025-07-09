"use client";

import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Color scheme aligned with asset classes
const COLORS = {
  Equity: "#4CAF50", // Green
  Debt: "#2196F3", // Blue
  Gold: "#FFC107", // Yellow
};

export default function AssetAllocationChart({ data }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Asset Allocation
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[entry.name] || "#8884d8"} // fallback color
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) => `₹ ${value.toLocaleString()}`}
            contentStyle={{ fontSize: "0.875rem" }}
          />

          <Legend
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{
              fontSize: "0.875rem",
              paddingTop: 8,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

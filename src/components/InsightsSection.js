export default function InsightsSection({ holdings }) {
  if (!holdings || holdings.length === 0) return null;

  const topFund = holdings.reduce((a, b) =>
    a.returnPercent > b.returnPercent ? a : b
  );
  const poorFund = holdings.reduce((a, b) =>
    a.returnPercent < b.returnPercent ? a : b
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
      <InsightCard
        title="Top Performing Fund"
        subtitle={topFund.scheme}
        value={`Return: ${topFund.returnPercent}%`}
        color="green"
      />
      <InsightCard
        title="Poor Performing Fund"
        subtitle={poorFund.scheme}
        value={`Return: ${poorFund.returnPercent}%`}
        color="red"
      />
      <InsightCard
        title="Rebalancing Alert"
        subtitle="Consider reducing Equity exposure."
        value="Current Equity: 60%"
        color="yellow"
      />
    </div>
  );
}

// 🎨 Reusable Insight Card
function InsightCard({ title, subtitle, value, color }) {
  const borderColor =
    {
      green: "border-green-200",
      red: "border-red-200",
      yellow: "border-yellow-200",
    }[color] || "border-gray-200";

  const badgeColor =
    {
      green: "text-green-600",
      red: "text-red-600",
      yellow: "text-yellow-600",
    }[color] || "text-gray-800";

  return (
    <div
      className={`bg-white border ${borderColor} rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition`}
    >
      <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
      <p className="text-gray-800 font-medium text-base">{subtitle}</p>
      <p className={`mt-1 font-semibold ${badgeColor}`}>{value}</p>
    </div>
  );
}

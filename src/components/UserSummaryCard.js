export default function UserSummaryCard({ data }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-6 hover:shadow-md transition">
      <div className="grid grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-6">
        {/* Left Column: Basic Info */}
        <div className="space-y-3">
          <Info label="Name" value={data.name} />
          <Info label="PAN" value={data.pan} />
          <Info
            label="Risk Profile"
            value={data.riskProfile}
            color="text-yellow-600 font-medium"
          />
        </div>

        {/* Right Column: Financial Info */}
        <div className="space-y-3">
          <Info
            label="Portfolio Value"
            value={`₹ ${data.portfolioValue.toLocaleString()}`}
            color="text-green-600 text-lg font-semibold"
          />
          <Info
            label="Total Invested"
            value={`₹ ${data.totalInvested.toLocaleString()}`}
          />
          <Info
            label="Overall Return"
            value={`₹ ${data.overallReturn.toLocaleString()} (${
              data.returnPercent
            }%)`}
            color="text-blue-600 font-medium"
          />
          <Info label="XIRR" value={`${data.xirr}%`} />
        </div>
      </div>
    </div>
  );
}

// 💡 Reusable Info Block
function Info({ label, value, color = "text-gray-800" }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`text-base ${color}`}>{value}</p>
    </div>
  );
}

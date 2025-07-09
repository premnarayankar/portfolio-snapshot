export default function HoldingsTable({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Holdings</h2>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[700px] w-full text-sm text-gray-800 border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="p-3 border-b whitespace-nowrap">Scheme Name</th>
              <th className="p-3 border-b whitespace-nowrap">Type</th>
              <th className="p-3 border-b text-right whitespace-nowrap">
                Invested Amt
              </th>
              <th className="p-3 border-b text-right whitespace-nowrap">
                Current Value
              </th>
              <th className="p-3 border-b text-right whitespace-nowrap">
                Return %
              </th>
              <th className="p-3 border-b text-center whitespace-nowrap">
                SIP Active
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((holding, index) => (
              <tr
                key={index}
                className={`transition hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="p-3 whitespace-nowrap">{holding.scheme}</td>
                <td className="p-3 whitespace-nowrap">{holding.type}</td>
                <td className="p-3 text-right whitespace-nowrap">
                  ₹ {holding.invested.toLocaleString()}
                </td>
                <td className="p-3 text-right whitespace-nowrap">
                  ₹ {holding.current.toLocaleString()}
                </td>
                <td
                  className={`p-3 text-right whitespace-nowrap ${
                    holding.returnPercent >= 0
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {holding.returnPercent}%
                </td>
                <td className="p-3 text-center whitespace-nowrap">
                  {holding.sip ? (
                    <span className="text-green-600 font-medium">Yes</span>
                  ) : (
                    <span className="text-gray-500">No</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

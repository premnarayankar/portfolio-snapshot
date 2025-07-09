"use client";

import { useState } from "react";

const dateOptions = ["2025-07-09", "2025-07-01", "2025-06-15", "2025-06-01"];

export default function Header() {
  const [selectedDate, setSelectedDate] = useState(dateOptions[0]);

  return (
    <header className="sticky top-0 bg-white z-10 shadow-sm border-b border-gray-200 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      {/* Title */}
      <h1 className="text-xl font-bold text-gray-800 tracking-tight">
        Portfolio Snapshot
      </h1>

      {/* Right controls */}
      <div className="flex gap-3 mt-3 sm:mt-0 items-center">
        {/* Date Selector */}
        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border border-gray-300 text-gray-800 bg-white rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          {dateOptions.map((date) => (
            <option key={date} value={date}>
              As on {date}
            </option>
          ))}
        </select>

        {/* Download Button */}
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-md transition"
          onClick={() => alert("Download PDF is not implemented yet.")}
        >
          Download PDF
        </button>
      </div>
    </header>
  );
}

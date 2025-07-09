import Header from "@/components/Header";
import UserSummaryCard from "@/components/UserSummaryCard";
import AssetAllocationChart from "@/components/AssetAllocationChart";
import HoldingsTable from "@/components/HoldingsTable";
import InsightsSection from "@/components/InsightsSection";

import { userSummary, assetAllocation, holdings } from "@/data/portfolioData";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <main className="px-4 md:px-8 py-6 space-y-6">
        <UserSummaryCard data={userSummary} />
        <AssetAllocationChart data={assetAllocation} />
        <HoldingsTable data={holdings} />
        <InsightsSection holdings={holdings} />
      </main>
    </div>
  );
}

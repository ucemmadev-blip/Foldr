import Layout from "../components/Layout/Layout";
import { RecentFiles } from "@/components/dashboard/RecentFiles";
import { StorageSummary } from "@/components/dashboard/StorageSummary";
import { StorageOverview } from "@/components/dashboard/StorageOverview";
import { LargeFiles } from "@/components/dashboard/LargeFiles";

export const HomePage = () => {
  return (
    <>
      <Layout>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <StorageSummary />
            <RecentFiles />
          </div>

          <div className="space-y-6">
            <StorageOverview />
            <LargeFiles />
          </div>
        </div>
      </Layout>
    </>
  );
};

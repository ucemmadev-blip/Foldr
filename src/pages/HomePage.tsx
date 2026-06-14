import Layout from "../components/layout/Layout";
import { RecentFiles } from "@/components/dashboard/RecentFiles";
import { StorageSummary } from "@/components/dashboard/StorageSummary";
import { StorageOverview } from "@/components/dashboard/StorageOverview";
import { LargeFiles } from "@/components/dashboard/LargeFiles";

import { useEffect, useState } from "react";
import { getFiles } from "@/services/fileService";
import type { FileRecord } from "@/types/file";

export const HomePage = () => {
  const [files, setFiles] = useState<FileRecord[]>([])

  const loadFiles = async () => {
    const data = await getFiles();
    setFiles(data ?? [])
  };

  useEffect(() => {
    loadFiles()
  }, [])

  return (
    <>
      <Layout>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <StorageSummary />
            <RecentFiles files={files}/>
          </div>

          <div className="space-y-6">
            <StorageOverview />
            <LargeFiles onUploadSuccess={loadFiles}/>
          </div>
        </div>
      </Layout>
    </>
  );
};

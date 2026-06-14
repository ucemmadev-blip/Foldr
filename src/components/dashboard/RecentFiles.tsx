import { Filter } from "lucide-react";
import { Card, CardAction, CardHeader, CardContent } from "../../../@/components/ui/card";
import { ContentCard } from "./ContentCard";
import type { FileRecord } from "@/types/file";

interface RecentFilesProps {
  files: FileRecord[];
}

export const RecentFiles = ({files}: RecentFilesProps) => {
  return (
    <>
      <Card className="mt-5 mx-10">
        <CardHeader>
          <h2 className="text-xl font-bold">Recent Files</h2>

          <CardAction className="flex items-center gap-2 bg-gray-300 p-2 rounded-md ">
            <Filter size={10} />
            Filter
          </CardAction>
        </CardHeader>

        <CardContent>
          <ContentCard files={files}/>
        </CardContent>
      </Card>
    </>
  );
};

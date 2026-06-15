import { Heart, Share2, Trash2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../../@/components/ui/card";

import { supabase } from "@/lib/supabase";
import { FilePreview } from "./FilePreview";

interface FileRecord {
  id: number;
  name: string;
  size: number;
  type: string;
  path: string;
  created_at: string;
}

interface ContentCardProps {
  files: FileRecord[];
}

export const ContentCard = ({ files }: ContentCardProps) => {
  const getFileUrl = (path: string) => {
    const { data } = supabase.storage.from("files").getPublicUrl(path);
    return data.publicUrl;
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      {files.map((file) => (
        <Card
          key={file.id}
          className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
        >
          <CardContent className="p-0">
            <FilePreview fileUrl={getFileUrl(file.path)} fileType={file.type} />
          </CardContent>

          <div className="p-4">
            <h3 className="font-medium truncate">{file.name}</h3>

            <p className="text-sm text-muted-foreground">
              {(file.size / 1024).toFixed(1)} KB
            </p>
          </div>

          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              {new Date(file.created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </p>

            <div className="flex gap-3">
              <Share2
                size={18}
                className="cursor-pointer hover:scale-110 transition"
              />

              <Trash2
                size={18}
                className="cursor-pointer hover:scale-110 transition"
              />

              <Heart
                size={18}
                className="cursor-pointer hover:scale-110 transition"
              />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

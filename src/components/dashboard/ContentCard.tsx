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

  console.log(files);

  return (
    <div className="grid grid-cols-3 gap-5">
      {files.map((file) => (
        <Card key={file.id}>
          <CardHeader>{file.name}</CardHeader>

          <CardContent>
            <FilePreview fileUrl={getFileUrl(file.path)} fileType={file.type} />
          </CardContent>

          <CardFooter>
            <div className="flex justify-around w-full">
              <p>
                {new Date(file.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </p>

              <div className="flex gap-2">
                <Share2 size={20} />
                <Trash2 size={20} />
                <Heart size={20} />
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

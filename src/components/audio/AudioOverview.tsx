import { Button } from "../../../@/components/ui/button";
import { Card, CardContent, CardFooter } from "../../../@/components/ui/card";
import { LayoutDashboard, Music } from "lucide-react";
import { useEffect, useState } from "react";

import { getAudio } from "@/services/fileService";
import { supabase } from "@/lib/supabase";
import type { FileRecord } from "@/types/file";

interface AudioItem {
  id: string;
  title: string;
  artist: string;
  duration: string;
  size: string;
  date: Date;
}

export const AudioOverview = () => {
  const [audioFiles, setAudioFiles] = useState<FileRecord[]>([]);

  useEffect(() => {
    const loadAudio = async () => {
      const data = await getAudio();
      setAudioFiles(data);
    };

    loadAudio();
  }, []);

  const getFileUrl = (path: string) => {
    const { data } = supabase.storage.from("files").getPublicUrl(path);

    return data.publicUrl;
  };

  return (
    <>
      <h2 className="font-bold text-3xl border-b p">Audio</h2>

      <div className="flex justify-end">
        <Button variant={"outline"} className="mt-4">
          <LayoutDashboard />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {audioFiles.map((audio) => (
          <Card key={audio.id}>
            <CardContent className="flex flex-col items-center gap-4">
              <Music size={64} />
              <audio controls className="w-full" src={getFileUrl(audio.path)} />
            </CardContent>

            <CardFooter className="flex justify-between">
              <p className="truncate">{audio.name}</p>

              <p>{(audio.size / 1024 / 1024).toFixed(1)} MB</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

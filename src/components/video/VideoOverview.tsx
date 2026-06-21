import { Button } from "../../../@/components/ui/button";
import { Card, CardContent, CardFooter } from "../../../@/components/ui/card";

import { Play, LayoutDashboard } from "lucide-react";

import { useEffect, useState } from "react";
import { getVideos } from "@/services/fileService";
import { supabase } from "@/lib/supabase";
import type { FileRecord } from "@/types/file";

import { Dialog, DialogContent } from "../../../@/components/ui/dialog";

interface VideoItem {
  id: string;
  title: string;
  duration: string;
  resolution: string;
  size: string;
  thumbnail: string;
  date: Date;
}

export const VideoOverview = () => {
  const [videos, setVideos] = useState<FileRecord[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const loadVideos = async () => {
      const data = await getVideos();
      setVideos(data);
    };

    loadVideos();
  }, []);

  const getFileUrl = (path: string) => {
    const { data } = supabase.storage.from("files").getPublicUrl(path);

    return data.publicUrl;
  };

  return (
    <>
      <h2 className="font-bold text-3xl border-b p">Videos</h2>

      <div className="flex justify-end">
        <Button variant={"outline"} className="mt-4">
          <LayoutDashboard />
        </Button>
      </div>

      <div className="grid gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <Card key={video.id}>
            <CardContent>
              <div
                className="relative cursor-pointer"
                onClick={() => setSelectedVideo(getFileUrl(video.path))}
              >
                <video
                  src={getFileUrl(video.path)}
                  className="h-48 w-full object-cover rounded-md"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Play
                    size={50}
                    className="text-white bg-black/50 rounded-full p-2"
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              <p className="truncate">{video.name}</p>

              <p>{(video.size / 1024 / 1024).toFixed(1)} MB</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent className="max-w-5xl">
          {selectedVideo && (
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

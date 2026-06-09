import { Button } from "../../../@/components/ui/button";
import { Card, CardContent, CardFooter } from "../../../@/components/ui/card";

import { LayoutDashboard } from "lucide-react";

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
  const videos: VideoItem[] = [
    {
      id: "1",
      title: "Product Demo.mp4",
      duration: "04:32",
      resolution: "1080p",
      size: "128 MB",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
      date: new Date("2026-05-10"),
    },
    {
      id: "2",
      title: "Vacation Highlights.mp4",
      duration: "12:15",
      resolution: "4K",
      size: "650 MB",
      thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      date: new Date("2026-05-14"),
    },
    {
      id: "3",
      title: "React Tutorial.mp4",
      duration: "28:42",
      resolution: "1080p",
      size: "890 MB",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      date: new Date("2026-05-18"),
    },
    {
      id: "4",
      title: "Team Meeting Recording.mp4",
      duration: "45:10",
      resolution: "720p",
      size: "1.2 GB",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      date: new Date("2026-05-22"),
    },
    {
      id: "5",
      title: "Launch Event.mp4",
      duration: "08:05",
      resolution: "1080p",
      size: "210 MB",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      date: new Date("2026-05-25"),
    },
    {
      id: "6",
      title: "Design Review.mp4",
      duration: "16:38",
      resolution: "1080p",
      size: "480 MB",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      date: new Date("2026-05-28"),
    },
  ];

  return (
    <>
      <h2 className="font-bold text-3xl border-b p">Videos</h2>

      <div className="flex justify-end">
        <Button variant={"outline"} className="mt-4">
          <LayoutDashboard />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {videos.map((video) => (
          <Card key={video.id}>
            <CardContent>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="h-40 w-full rounded-t-md object-cover"
              />
            </CardContent>

            <CardFooter className="flex flex-col items-start gap-1">
              <h3 className="font-medium">{video.title}</h3>
              <p className="text-sm text-muted-foreground">
                {video.duration} • {video.resolution}
              </p>
              <p className="text-sm text-muted-foreground">{video.size}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

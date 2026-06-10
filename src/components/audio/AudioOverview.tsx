import { Button } from "../../../@/components/ui/button";
import { Card, CardContent, CardFooter } from "../../../@/components/ui/card";
import { LayoutDashboard } from "lucide-react";

interface AudioItem {
  id: string;
  title: string;
  artist: string;
  duration: string;
  size: string;
  date: Date;
}

export const AudioOverview = () => {
  const audios: AudioItem[] = [
    {
      id: "1",
      title: "Morning Vibes",
      artist: "Alex Johnson",
      duration: "3:45",
      size: "4.2 MB",
      date: new Date("2026-05-10"),
    },
    {
      id: "2",
      title: "Deep Focus",
      artist: "Luna Beats",
      duration: "5:12",
      size: "6.8 MB",
      date: new Date("2026-05-12"),
    },
    {
      id: "3",
      title: "Summer Drive",
      artist: "Neon Waves",
      duration: "4:30",
      size: "5.1 MB",
      date: new Date("2026-05-14"),
    },
    {
      id: "4",
      title: "Podcast Episode 24",
      artist: "Tech Talks",
      duration: "42:18",
      size: "38.5 MB",
      date: new Date("2026-05-18"),
    },
    {
      id: "5",
      title: "Rain Sounds",
      artist: "Nature Studio",
      duration: "12:04",
      size: "14.2 MB",
      date: new Date("2026-05-22"),
    },
    {
      id: "6",
      title: "Workout Mix",
      artist: "DJ Pulse",
      duration: "28:16",
      size: "25.7 MB",
      date: new Date("2026-05-25"),
    },
    {
      id: "7",
      title: "Embrace",
      artist: "Saphheros",
      duration: "28:16",
      size: "25.7 MB",
      date: new Date("2026-05-28"),
    },
    {
      id: "8",
      title: "Embrace",
      artist: "Saphheros",
      duration: "28:16",
      size: "25.7 MB",
      date: new Date("2026-05-28"),
    },
    {
      id: "9",
      title: "Embrace",
      artist: "Saphheros",
      duration: "28:16",
      size: "25.7 MB",
      date: new Date("2026-05-28"),
    },
    {
      id: "9",
      title: "Embrace",
      artist: "Saphheros",
      duration: "28:16",
      size: "25.7 MB",
      date: new Date("2026-05-28"),
    },
    {
      id: "9",
      title: "Embrace",
      artist: "Saphheros",
      duration: "28:16",
      size: "25.7 MB",
      date: new Date("2026-05-28"),
    },
    {
      id: "1",
      title: "Morning Vibes",
      artist: "Alex Johnson",
      duration: "3:45",
      size: "4.2 MB",
      date: new Date("2026-05-10"),
    },
    {
      id: "2",
      title: "Deep Focus",
      artist: "Luna Beats",
      duration: "5:12",
      size: "6.8 MB",
      date: new Date("2026-05-12"),
    },
    {
      id: "3",
      title: "Summer Drive",
      artist: "Neon Waves",
      duration: "4:30",
      size: "5.1 MB",
      date: new Date("2026-05-14"),
    },
    {
      id: "4",
      title: "Podcast Episode 24",
      artist: "Tech Talks",
      duration: "42:18",
      size: "38.5 MB",
      date: new Date("2026-05-18"),
    },
    {
      id: "5",
      title: "Rain Sounds",
      artist: "Nature Studio",
      duration: "12:04",
      size: "14.2 MB",
      date: new Date("2026-05-22"),
    },
    {
      id: "6",
      title: "Workout Mix",
      artist: "DJ Pulse",
      duration: "28:16",
      size: "25.7 MB",
      date: new Date("2026-05-25"),
    },
    {
      id: "7",
      title: "Embrace",
      artist: "Saphheros",
      duration: "28:16",
      size: "25.7 MB",
      date: new Date("2026-05-28"),
    },
    {
      id: "8",
      title: "Embrace",
      artist: "Saphheros",
      duration: "28:16",
      size: "25.7 MB",
      date: new Date("2026-05-28"),
    },
    {
      id: "9",
      title: "Embrace",
      artist: "Saphheros",
      duration: "28:16",
      size: "25.7 MB",
      date: new Date("2026-05-28"),
    },
    {
      id: "9",
      title: "Embrace",
      artist: "Saphheros",
      duration: "28:16",
      size: "25.7 MB",
      date: new Date("2026-05-28"),
    },
    {
      id: "9",
      title: "Embrace",
      artist: "Saphheros",
      duration: "28:16",
      size: "25.7 MB",
      date: new Date("2026-05-28"),
    },
  ];
  return (
    <>
      <h2 className="font-bold text-3xl border-b p">Audio</h2>

      <div className="flex justify-end">
        <Button variant={"outline"} className="mt-4">
          <LayoutDashboard />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {audios.map((audio) => (
          <Card key={audio.id}>
            <CardContent>
              <div>
                <h3 className="font-semibold">{audio.title}</h3>
                <p className="text-sm text-muted-foreground">{audio.artist}</p>
              </div>

              <div className="text-right">
                <p>{audio.duration}</p>
                <p className="text-sm text-muted-foreground">{audio.size}</p>
              </div>
              {/* <img
                src={photo.image}
                alt={photo.title}
                className="h-48 w-full object-cover rounded-md"
              /> */}
            </CardContent>

            {/* <CardFooter className="flex justify-between">
              <p>{photo.title}</p>
              <p>{photo.size}</p>
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </>
  );
};

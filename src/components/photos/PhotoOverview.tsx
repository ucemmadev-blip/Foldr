import { Button } from "../../../@/components/ui/button";
import { Card, CardContent, CardFooter } from "../../../@/components/ui/card";
import { LayoutDashboard } from "lucide-react";

interface PhotoItem {
  id: string;
  title: string;
  image: string;
  size: string;
  date: Date;
}

export const PhotoOverview = () => {
  const photos: PhotoItem[] = [
    {
      id: "1",
      title: "Beach Sunset",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      size: "2.4 MB",
      date: new Date("2026-05-12"),
    },
    {
      id: "2",
      title: "Mountain View",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      size: "3.1 MB",
      date: new Date("2026-05-15"),
    },
    {
      id: "3",
      title: "City Lights",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
      size: "4.7 MB",
      date: new Date("2026-05-18"),
    },
    {
      id: "4",
      title: "Forest Trail",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      size: "1.9 MB",
      date: new Date("2026-05-21"),
    },
    {
      id: "5",
      title: "Desert Dunes",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      size: "2.8 MB",
      date: new Date("2026-05-24"),
    },
    {
      id: "6",
      title: "Snowy Peaks",
      image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606",
      size: "5.2 MB",
      date: new Date("2026-05-27"),
    },
  ];

  return (
    <>
      <h2 className="font-bold text-3xl border-b p">Photos</h2>

      <div className="flex justify-end">
        <Button variant={"outline"} className="mt-4">
          <LayoutDashboard />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {photos.map((photo) => (
          <Card key={photo.id}>
            <CardContent>
              <img
                src={photo.image}
                alt={photo.title}
                className="h-48 w-full object-cover rounded-md"
              />
            </CardContent>

            <CardFooter className="flex justify-between">
              <p>{photo.title}</p>
              <p>{photo.size}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

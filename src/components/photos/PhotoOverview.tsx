import { Button } from "../../../@/components/ui/button";
import { Card, CardContent, CardFooter } from "../../../@/components/ui/card";
import { LayoutDashboard } from "lucide-react";
import { useState, useEffect } from "react";
import { getPhotos } from "@/services/fileService";
import type { FileRecord } from "@/types/file";
import { supabase } from "@/lib/supabase";

import { Dialog, DialogContent } from "../../../@/components/ui/dialog";

export const PhotoOverview = () => {
  const [photos, setPhotos] = useState<FileRecord[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadPhotos = async () => {
      const data = await getPhotos();
      setPhotos(data);
    };

    loadPhotos();
  }, []);

  const getFileUrl = (path: string) => {
    const { data } = supabase.storage.from("files").getPublicUrl(path);

    return data.publicUrl;
  };

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
                src={getFileUrl(photo.path)}
                alt={photo.name}
                className="h-48 w-full object-cover rounded-md"
                onClick={() => setSelectedImage(getFileUrl(photo.path))}
              />
            </CardContent>

            <CardFooter className="flex justify-between">
              <p className="truncate">{photo.name}</p>
              <p>{(photo.size / 1024).toFixed(1)} KB</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full Preview"
              className="w-full h-auto rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

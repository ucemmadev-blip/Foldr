import { Heart, Share2, Trash2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../../@/components/ui/card";

interface FileItem {
  id: string;
  filename: string;
  type: string;
  image: string;
  date: Date;
}

export const ContentCard = () => {
  const files: FileItem[] = [
    {
      id: "1",
      filename: "Resume.pdf",
      type: "pdf",
      image:
        "https://png.pngtree.com/png-clipart/20220612/original/pngtree-pdf-file-icon-png-png-image_7965915.png",
      date: new Date(),
    },
    {
      id: "2",
      filename: "Resume.pdf",
      type: "pdf",
      image:
        "https://png.pngtree.com/png-clipart/20220612/original/pngtree-pdf-file-icon-png-png-image_7965915.png",
      date: new Date(),
    },
    {
      id: "3",
      filename: "Resume.pdf",
      type: "pdf",
      image:
        "https://png.pngtree.com/png-clipart/20220612/original/pngtree-pdf-file-icon-png-png-image_7965915.png",
      date: new Date(),
    },
    {
      id: "4",
      filename: "Resume.pdf",
      type: "pdf",
      image:
        "https://png.pngtree.com/png-clipart/20220612/original/pngtree-pdf-file-icon-png-png-image_7965915.png",
      date: new Date(),
    },
    {
      id: "5",
      filename: "Resume.pdf",
      type: "pdf",
      image:
        "https://png.pngtree.com/png-clipart/20220612/original/pngtree-pdf-file-icon-png-png-image_7965915.png",
      date: new Date(),
    },
    {
      id: "6",
      filename: "Resume.pdf",
      type: "pdf",
      image:
        "https://png.pngtree.com/png-clipart/20220612/original/pngtree-pdf-file-icon-png-png-image_7965915.png",
      date: new Date(),
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-5">
      {files.map((file) => {
        return (
          <Card key={file.id}>
            <CardHeader>{file.filename}</CardHeader>
            <CardContent>
              <img src={file.image} alt="img" className="w-50" />
            </CardContent>
            <CardFooter>
              <div className="flex justify-around w-full">
                <p>{file.date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric"
                })}</p>

                <div className="flex gap-2">
                  <Share2 size={20}/>
                  <Trash2 size={20}/>
                  <Heart size={20}/>
                </div>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

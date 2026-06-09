import { Button } from "../../../@/components/ui/button";
import { Card, CardContent, CardFooter } from "../../../@/components/ui/card";

import { LayoutDashboard } from "lucide-react";

interface DocumentItem {
  id: string;
  filename: string;
  type: string;
  size: string;
  owner: string;
  date: Date;
}

export const DocumentOverview = () => {
  const documents: DocumentItem[] = [
    {
      id: "1",
      filename: "Project Proposal.pdf",
      type: "PDF",
      size: "2.4 MB",
      owner: "Uche",
      date: new Date("2026-05-10"),
    },
    {
      id: "2",
      filename: "Meeting Notes.docx",
      type: "DOCX",
      size: "1.1 MB",
      owner: "Sarah",
      date: new Date("2026-05-13"),
    },
    {
      id: "3",
      filename: "Financial Report.xlsx",
      type: "XLSX",
      size: "3.8 MB",
      owner: "Michael",
      date: new Date("2026-05-16"),
    },
    {
      id: "4",
      filename: "Resume.pdf",
      type: "PDF",
      size: "890 KB",
      owner: "Uche",
      date: new Date("2026-05-19"),
    },
    {
      id: "5",
      filename: "UI Design Brief.docx",
      type: "DOCX",
      size: "1.7 MB",
      owner: "Jane",
      date: new Date("2026-05-22"),
    },
    {
      id: "6",
      filename: "Database Schema.pdf",
      type: "PDF",
      size: "2.9 MB",
      owner: "David",
      date: new Date("2026-05-25"),
    },
        {
      id: "7",
      filename: "Database Schema.pdf",
      type: "PDF",
      size: "2.9 MB",
      owner: "David",
      date: new Date("2026-05-25"),
    },
        {
      id: "8",
      filename: "Database Schema.pdf",
      type: "PDF",
      size: "2.9 MB",
      owner: "David",
      date: new Date("2026-05-25"),
    },
        {
      id: "9",
      filename: "Database Schema.pdf",
      type: "PDF",
      size: "2.9 MB",
      owner: "David",
      date: new Date("2026-05-25"),
    },

  ];

  return (
    <>
      <h2 className="font-bold text-3xl border-b p">Documents</h2>

      <div className="flex justify-end">
        <Button variant={"outline"} className="mt-4">
          <LayoutDashboard />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {documents.map((document) => (
          <Card key={document.id}>
            <CardContent>
              <div>
                <h3 className="font-medium">{document.filename}</h3>
                <p className="text-sm text-muted-foreground">{document.owner}</p>
              </div>

              <div className="text-right">
                <p className="text-sm text-muted-foreground">
                  {document.date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric"
                  })}
                </p>
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

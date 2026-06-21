import { Button } from "../../../@/components/ui/button";
import { Card, CardContent, CardFooter } from "../../../@/components/ui/card";

import { LayoutDashboard } from "lucide-react";

import { useEffect, useState } from "react";

import { getDocuments } from "@/services/fileService";
import type { FileRecord } from "@/types/file";

import pdfIcon from "@/assets/pdf-file.png";
import docIcon from "@/assets/google-docs.png";
import excelIcon from "@/assets/xls.png";
import fileIcon from "@/assets/document.png";

import { Dialog, DialogContent } from "../../../@/components/ui/dialog";
import { supabase } from "@/lib/supabase";
import * as XLSX from "xlsx";
import mammoth from "mammoth";

export const DocumentOverview = () => {
  const [documents, setDocuments] = useState<FileRecord[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<FileRecord | null>(null);
  const [excelData, setExcelData] = useState<any[]>([]);
  const [docxContent, setDocxContent] = useState("");

  useEffect(() => {
    const loadDocuments = async () => {
      const data = await getDocuments();
      setDocuments(data);
    };

    loadDocuments();
  }, []);

  const getDocumentIcon = (type: string) => {
    if (type === "application/pdf") return pdfIcon;

    if (
      type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )
      return docIcon;

    if (
      type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      type === "application/vnd.ms-excel"
    )
      return excelIcon;

    return fileIcon;
  };

  const getFileUrl = (path: string) => {
    const { data } = supabase.storage.from("files").getPublicUrl(path);

    return data.publicUrl;
  };

  const getOfficeViewerUrl = (path: string) => {
    const fileUrl = getFileUrl(path);

    return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
      fileUrl,
    )}`;
  };

  const handleDocumentClick = async (doc: FileRecord) => {
    setSelectedDoc(doc);

    // Excel
    const isExcel =
      doc.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      doc.type === "application/vnd.ms-excel";

    if (isExcel) {
      const response = await fetch(getFileUrl(doc.path));

      const arrayBuffer = await response.arrayBuffer();

      const workbook = XLSX.read(arrayBuffer, {
        type: "array",
      });

      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      const rows = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
      });

      setExcelData(rows as any[]);

      return;
    }

    // DOCX
    const isDocx =
      doc.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    if (isDocx) {
      const response = await fetch(getFileUrl(doc.path));

      const arrayBuffer = await response.arrayBuffer();

      const result = await mammoth.convertToHtml({
        arrayBuffer,
      });

      setDocxContent(result.value);

      return;
    }
  };

  return (
    <>
      <h2 className="font-bold text-3xl border-b p">Documents</h2>

      <div className="flex justify-end">
        <Button variant={"outline"} className="mt-4">
          <LayoutDashboard />
        </Button>
      </div>

      <div className="grid gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
          <Card
            key={doc.id}
            className="cursor-pointer"
            onClick={() => handleDocumentClick(doc)}
          >
            <CardContent>
              <img
                src={getDocumentIcon(doc.type)}
                alt={doc.name}
                className="h-40 w-full object-contain"
              />
            </CardContent>

            <CardFooter className="flex justify-between">
              <p className="truncate">{doc.name}</p>

              <p>{(doc.size / 1024).toFixed(1)} KB</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedDoc} onOpenChange={() => setSelectedDoc(null)}>
        <DialogContent className="max-w-6xl">
          {/* PDF Viewer */}
          {selectedDoc?.type === "application/pdf" && (
            <iframe
              src={getFileUrl(selectedDoc.path)}
              className="w-full h-[80vh]"
            />
          )}

          {/* Excel Viewer */}
          {(selectedDoc?.type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
            selectedDoc?.type === "application/vnd.ms-excel") && (
            <div className="overflow-auto max-h-[80vh]">
              <table className="w-full border-collapse border">
                <tbody>
                  {excelData.map((row: any, rowIndex: number) => (
                    <tr key={rowIndex}>
                      {row.map((cell: any, cellIndex: number) => (
                        <td key={cellIndex} className="border p-2">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* DOCX Viewer */}
          {selectedDoc?.type ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && (
            <iframe
              src={getOfficeViewerUrl(selectedDoc.path)}
              className="w-full h-[80vh]"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

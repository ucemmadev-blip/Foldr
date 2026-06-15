import { Play } from "lucide-react";
import pdfIcon from "@/assets/pdf-file.png";
import docIcon from "@/assets/google-docs.png";
import audioIcon from "@/assets/audio.png";
import fileIcon from "@/assets/document.png";
import excelIcon from '@/assets/xls.png'

interface FilePreviewProps {
  fileUrl: string;
  fileType: string;
}

export const FilePreview = ({ fileUrl, fileType }: FilePreviewProps) => {
  // Images
  if (fileType.startsWith("image/")) {
    return (
      <img
        src={fileUrl}
        alt="preview"
        className="w-full h-40 object-cover rounded-2xl px-2"
      />
    );
  }

  // Videos
  if (fileType.startsWith("video/")) {
    return (
      <div className="relative">
        <video src={fileUrl} className="w-full h-40 object-cover rounded-md" />

        <div className="absolute inset-0 flex items-center justify-center">
          <Play size={40} className="bg-black/50 text-white rounded-full p-2" />
        </div>
      </div>
    );
  }

  // PDFs
  if (fileType === "application/pdf") {
    return (
      <img src={pdfIcon} alt="pdf" className="w-full h-40 object-contain" />
    );
  }

  // Word Documents
  if (
    fileType ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    return (
      <img src={docIcon} alt="docx" className="w-full h-40 object-contain" />
    );
  }

  // Excel Files
if (
  fileType ===
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
) {
  return (
    <img
      src={excelIcon}
      alt="excel"
      className="w-full h-40 object-contain"
    />
  );
}

  // Audio
  if (fileType.startsWith("audio/")) {
    return (
      <img src={audioIcon} alt="audio" className="w-full h-40 object-contain" />
    );
  }

  // Default
  return (
    <img src={fileIcon} alt="file" className="w-full h-40 object-contain" />
  );
};

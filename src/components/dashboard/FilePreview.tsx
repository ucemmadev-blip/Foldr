import { Play } from "lucide-react";

interface FilePreviewProps {
  fileUrl: string;
  fileType: string;
}

export const FilePreview = ({
  fileUrl,
  fileType,
}: FilePreviewProps) => {
  // Images
  if (fileType.startsWith("image/")) {
    return (
      <img
        src={fileUrl}
        alt="preview"
        className="w-full h-40 object-cover rounded-md"
      />
    );
  }

  // Videos
  if (fileType.startsWith("video/")) {
    return (
      <div className="relative">
        <video
          src={fileUrl}
          className="w-full h-40 object-cover rounded-md"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <Play
            size={40}
            className="bg-black/50 text-white rounded-full p-2"
          />
        </div>
      </div>
    );
  }

  // PDFs
  if (fileType === "application/pdf") {
    return (
      <img
        src="/pdf.png"
        alt="pdf"
        className="w-full h-40 object-contain"
      />
    );
  }

  // Word Documents
  if (
    fileType ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    return (
      <img
        src="/docx.png"
        alt="docx"
        className="w-full h-40 object-contain"
      />
    );
  }

  // Audio
  if (fileType.startsWith("audio/")) {
    return (
      <img
        src="/audio.png"
        alt="audio"
        className="w-full h-40 object-contain"
      />
    );
  }

  // Default
  return (
    <img
      src="/file.png"
      alt="file"
      className="w-full h-40 object-contain"
    />
  );
};
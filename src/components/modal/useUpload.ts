import { useState } from "react";
import { supabase } from "../../lib/supabase";

export function useUpload(onUploadSuccess: () => void) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [progress, setProgress] = useState(0);

  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
      setProgress(0);
    }
  };

  const handleUpload = async (): Promise<boolean> => {
    if (!selectedFile) {
      return false;
    }

    setIsUploading(true);
    setProgress(0);

    try {
      const filePath = `uploads/${Date.now()}-${selectedFile.name}`;

      const { data, error } = await supabase.storage
        .from("files")
        .upload(filePath, selectedFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        console.error("UPLOAD ERROR:", error);
        return false;
      }

      const { error: dbError } = await supabase.from("files").insert({
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        path: data.path,
      });

      if (dbError) {
        console.error("DATABASE ERROR:", dbError);
        return false;
      }

      setProgress(100);
      setSelectedFile(null);

      onUploadSuccess();

      return true;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    selectedFile,
    progress,
    isUploading,
    handleFileChange,
    handleUpload,
  };
}

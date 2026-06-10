import { useState } from "react";

export function useUpload() {
  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [progress, setProgress] = useState(0);

  const [isUploading, setIsUploading] =
    useState(false);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
      setProgress(0);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    setIsUploading(true);

    let value = 0;

    const interval = setInterval(() => {
      value += 10;

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setIsUploading(false);
      }
    }, 300);
  };

  return {
    selectedFile,
    progress,
    isUploading,
    handleFileChange,
    handleUpload,
  };
}
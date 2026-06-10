import { useState } from "react";

import { Upload } from "lucide-react";

import { Button } from "../../../@/components/ui/button";
import { Progress } from "../../../@/components/ui/progress";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../@/components/ui/dialog";

interface UploadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const UploadModal = ({ open, onOpenChange }: UploadModalProps) => {
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload File</DialogTitle>
        </DialogHeader>

        {/* Dropzone */}
        <label
          htmlFor="file-upload"
          className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer"
        >
          <Upload size={40} />

          <p className="mt-2 font-medium">Click or Drag & Drop</p>

          <p className="text-sm text-muted-foreground">Upload any file</p>

          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {/* Selected File */}
        {selectedFile && (
          <div className="border rounded-lg p-3">
            <p className="font-medium">{selectedFile.name}</p>

            <p className="text-sm text-muted-foreground">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}

        {/* Progress */}
        {selectedFile && (
          <div className="space-y-2">
            <Progress value={progress} />

            <p className="text-sm">{progress}% uploaded</p>
          </div>
        )}

        <Button onClick={handleUpload} disabled={!selectedFile || isUploading}>
          {isUploading ? "Uploading..." : "Upload"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

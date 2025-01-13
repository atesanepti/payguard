"use client";
import React, { useState, useTransition } from "react";
import axios from "axios";


import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { Upload } from "lucide-react";
import { convertBlobUrlToFile } from "@/lib/convertBlobUrlToFile";
import { uploadFile } from "@/utils/supabase/storage";
import SuccessMessage from "../alert/SuccessMessage";

const DocumentForm = () => {
  const [pending, startPending] = useTransition();
  const [success, setSuccess] = useState("");
  const [selectedFile, setSelectedFile] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileUrl = URL.createObjectURL(e.target.files[0]);

    setSelectedFile(fileUrl);
  };

  const submitIndentity = () => {
    setSuccess("");
    if (!selectedFile) return;
    startPending(async () => {
      const imageFile = await convertBlobUrlToFile(selectedFile);

      const { imageUrl, error } = await uploadFile({
        file: imageFile,
        bucket: "paygaurd",
        folder: "user/documents",
      });

      if (error) {
        return redirect("/error");
      }

      try {
        await axios.post("api/user/document", { fileUrl: imageUrl });
        setSuccess("Request was successfully sent");
      } catch {
        return redirect("/error");
      }
    });
  };

  return (
    <div className="w-full">
      <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
        <div className="max-w-xl mx-auto">
          <Upload className="w-10 h-10 mx-auto text-brand" />

          <p className="text-gray-400 mb-4 text-xs lg:text-sm">
            or click to browse from your computer
          </p>

          <Input
            type="file"
            onChange={handleFileChange}
            disabled={pending}
            className="file:text-brand file:font-medium"
            accept="image/png,image/jpeg"
          />
        </div>
      </div>

      <SuccessMessage message={success} />
      <Button
        onClick={submitIndentity}
        disabled={pending}
        className="w-full mt-3"
      >
        Submit
      </Button>
    </div>
  );
};

export default DocumentForm;

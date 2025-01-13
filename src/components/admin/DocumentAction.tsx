"use client";
import React from "react";
import { Button } from "../ui/button";

interface DocumentActionProps {
  documentId: string;
}
const DocumentAction = ({ documentId }: DocumentActionProps) => {
  const handleOpenDocument = () => {
    console.log({ documentId });
  };

  return (
    <Button
      onClick={handleOpenDocument}
      className="bg-blue-600 hover:bg-blue-600/90"
    >
      Check
    </Button>
  );
};

export default DocumentAction;

"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface DocumentActionProps {
  documentId: string;
}
const DocumentAction = ({ documentId }: DocumentActionProps) => {
  return (
    <Button className="bg-blue-600 hover:bg-blue-600/90">
      <Link href={`/admin/documents/${documentId}`}>Check</Link>
    </Button>
  );
};

export default DocumentAction;

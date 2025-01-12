import React from "react";

import { CircleAlert } from "lucide-react";

interface ErrorMessageProps {
  message: string;
}
const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;
  return (
    <div className="flex items-center px-3 py-2 rounded-md bg-destructive/15 gap-2">
      <CircleAlert size={15} className="text-destructive" />
      <span className="text-xs text-destructive">{message}</span>
    </div>
  );
};

export default ErrorMessage;

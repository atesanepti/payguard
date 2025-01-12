import React from "react";

import { CircleCheck } from "lucide-react";

interface SuccessMessageProps {
  message: string;
}
const SuccessMessage = ({ message }: SuccessMessageProps) => {
  if (!message) return null;
  return (
    <div className="flex items-center px-3 py-2 rounded-md bg-emerald-600/15 gap-2">
      <CircleCheck size={15} className="text-emerald-600" />
      <span className="text-xs text-emerald-600">{message}</span>
    </div>
  );
};

export default SuccessMessage;

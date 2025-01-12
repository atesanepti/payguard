import { cn } from "@/lib/utils";
import React from "react";

import { File, Clock, BadgeCheck, BadgeX } from "lucide-react";
import { VARIANT, usePaymentStatusStyle } from "@/hooks/usePaymentStatusStyle";

interface AnalyticsProps {
  variant: VARIANT;
  title: string;
  quantity: number;
}

const AnalyticsCard = ({
  variant ,
  title,
  quantity,
}: AnalyticsProps) => {
  const { bgColor, textColor } = usePaymentStatusStyle(variant);



  const Icon = () => {
    return (
      <>
        {variant === VARIANT.APPROVED ? (
          <BadgeCheck className={`${textColor} w-4 h-4`} />
        ) : variant == VARIANT.PENDING ? (
          <Clock className={`${textColor} w-4 h-4`} />
        ) : variant === VARIANT.REJECTED ? (
          <BadgeX className={`${textColor} w-4 h-4`} />
        ) : (
          <File className={`${textColor} w-4 h-4`} />
        )}{" "}
      </>
    );
  };

  return (
    <div className="bg-secondary p-6 rounded-lg border border-gray-700">
      <div className="flex items-center">
        <div
          className={cn(
            "p-3 bg-opacity-20 rounded-lg flex items-center justify-center",
            `${bgColor}`
          )}
        >
          <Icon />
        </div>
        <div className="ml-4">
          <h3 className="text-gray-400 text-sm">{title}</h3>
          <p className="text-2xl font-semibold text-white">{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;

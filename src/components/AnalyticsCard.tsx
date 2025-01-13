import React from "react";



interface AnalyticsProps {
  title: string;
  quantity: number;
  style: React.ReactNode;
}

const AnalyticsCard = ({  title, quantity, style }: AnalyticsProps) => {
  return (
    <div className="bg-secondary p-6 rounded-lg border border-gray-700">
      <div className="flex items-center">
        {style}
        <div className="ml-4">
          <h3 className="text-gray-400 text-sm">{title}</h3>
          <p className="text-2xl font-semibold text-white">{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;

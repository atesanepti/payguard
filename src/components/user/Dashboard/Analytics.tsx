import React from "react";
import AnalyticsCard from "@/components/AnalyticsCard";
import { VARIANT } from "@/hooks/usePaymentStatusStyle";

const Analytics = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
      <AnalyticsCard
          title="Total Requests"
          quantity={100}
          variant={VARIANT.ALL}
        />
        <AnalyticsCard
          title="Pending"
          quantity={42}
          variant={VARIANT.PENDING}
        />
        <AnalyticsCard
          title="Approved"
          quantity={28}
          variant={VARIANT.APPROVED}
        />
        <AnalyticsCard
          title="Rejected"
          quantity={30}
          variant={VARIANT.REJECTED}
        />
    </div>
  );
};

export default Analytics;

import React from "react";

import Analytics from "@/components/user/Analytics";
import RecentPaymenyReq from "@/components/user/Dashboard/RecentPaymenyReq";
import RecentDocumentsReq from "@/components/user/Dashboard/RecentDocumentsReq";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Analytics />
      <RecentPaymenyReq />
      <RecentDocumentsReq />
    </div>
  );
};

export default Dashboard;

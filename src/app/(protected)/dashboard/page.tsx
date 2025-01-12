import React from 'react'

import Analytics from "@/components/user/Dashboard/Analytics";
import RecentPaymenyReq from '@/components/user/Dashboard/RecentPaymenyReq';


const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Analytics />
      <RecentPaymenyReq/>
    </div>
  );
}

export default Dashboard
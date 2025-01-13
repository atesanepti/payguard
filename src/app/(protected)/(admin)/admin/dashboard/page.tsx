import Analytics from "@/components/admin/Analytics";
import { Chart } from "@/components/admin/Chart";
import React from "react";

const dashboard = () => {
  return (
    <div>
      <Analytics />
      <Chart/>
    </div>
  );
};

export default dashboard;

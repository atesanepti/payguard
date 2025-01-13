"use client";
import React from "react";
import AnalyticsCard from "@/components/AnalyticsCard";
import { AnaliticsPayload } from "@/types";
import useSWR from "swr";
import { fetchData } from "@/lib/fetchData";
import AnalyticsSkeleton from "../skeletons/AnalyticsSkeleton";
import { File, Clock, BadgeCheck, BadgeX } from "lucide-react";
import { cn } from "@/lib/utils";

const Analytics = () => {
  const { data } = useSWR(
    `${process.env.NEXT_URL}/api/admin/analytics`,
    async (url: string) => fetchData<AnaliticsPayload>(url)
  );

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        {data && (
          <>
            <AnalyticsCard
              title="Total Requests"
              quantity={data.total}
              style={
                <div
                  className={cn(
                    "p-3 bg-opacity-20 rounded-lg flex items-center justify-center bg-blue-500"
                  )}
                >
                  <File className={`text-blue-500 w-4 h-4`} />
                </div>
              }
            />
            <AnalyticsCard
              title="Pending"
              quantity={data.pending}
              style={
                <div
                  className={cn(
                    "p-3 bg-opacity-20 rounded-lg flex items-center justify-center bg-yellow-500"
                  )}
                >
                  <Clock className={`text-yellow-500 w-4 h-4`} />
                </div>
              }
            />
            <AnalyticsCard
              title="Approved"
              quantity={data.approved}
              style={
                <div
                  className={cn(
                    "p-3 bg-opacity-20 rounded-lg flex items-center justify-center bg-green-500"
                  )}
                >
                  <BadgeCheck className={`text-green-500 w-4 h-4`} />
                </div>
              }
            />
            <AnalyticsCard
              title="Rejected"
              quantity={data.rejected}
              style={
                <div
                  className={cn(
                    "p-3 bg-opacity-20 rounded-lg flex items-center justify-center bg-red-500"
                  )}
                >
                  <BadgeX className={`text-red-500 w-4 h-4`} />
                </div>
              }
            />
          </>
        )}
      </div>
      {!data && <AnalyticsSkeleton />}
    </>
  );
};

export default Analytics;

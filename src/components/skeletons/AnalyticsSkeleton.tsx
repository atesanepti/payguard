import React from 'react'
import { Skeleton } from "@/components/ui/skeleton";

const AnalyticsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 ">
      <Skeleton className="h-[90px] w-full rounded-xl" />
      <Skeleton className="h-[90px] w-full rounded-xl" />
      <Skeleton className="h-[90px] w-full rounded-xl" />
      <Skeleton className="h-[90px] w-full rounded-xl" />
    </div>
  );
}

export default AnalyticsSkeleton
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const TableSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-1 lg:gap-2">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-3">
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-3">
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-3">
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-3">
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
        <Skeleton className="h-[50px] w-full rounded-sm" />
      </div>
    </div>
  );
};

export default TableSkeleton;

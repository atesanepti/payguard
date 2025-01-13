import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const TableSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-1 lg:gap-2">
      <Skeleton className="h-[50px] w-full rounded-xl" />
      <Skeleton className="h-[50px] w-full rounded-xl" />
      <Skeleton className="h-[50px] w-full rounded-xl" />
      <Skeleton className="h-[50px] w-full rounded-xl" />
    </div>
  );
};

export default TableSkeleton;

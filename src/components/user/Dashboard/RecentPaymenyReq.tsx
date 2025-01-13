"use client";
import React, { useState } from "react";
import useSWR from "swr";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PaymentViewTable from "@/components/PaymentViewTable";
import SuspenseX from "@/components/SuspenseX";
import PaymentAction from "./PaymentAction";
import { PaymentsResPayload } from "@/types";
import axios from "axios";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import { Button } from "@/components/ui/button";

const fetchData = async <T,>(url: string) => {
  interface DataFetch {
    message: string;
    success: number;
    payload?: T;
  }

  const res = await axios.get<DataFetch>(url);
  if (!res.data.success) {
    throw new Error("Fetching failed");
  }
  return res.data.payload;
};

const RecentPaymenyReq = () => {
  const [page, setPage] = useState(1);
  const limit = 3;

  const { data } = useSWR(
    `api/user/payment?page=${page}&limit=${limit}`,
    async (url) => fetchData<PaymentsResPayload>(url)
  );

  const fields = data?.payments?.map((p) => {
    return {
      title: p.title,
      amount: p.amount,
      status: p.status,
      date: p.createdAt,
      action: <PaymentAction paymentId={p.id} />,
    };
  });

  const handlePagination = (page: number) => {
    setPage(page);
  };

  return (
    <div className="bg-secondary rounded-lg border border-gray-700 mt-6 lg:mt-8 w-full">
      <div className="w-full overflow-x-auto">
        <div className="p-4 lg:p-6 w-full min-w-[500px]">
          <div className="flex items-center justify-between mb-3 lg:mb-6">
            <h2 className="text-base lg:text-lg font-semibold text-white">
              Payment Requests
            </h2>
            <span className="text-gray-400 text-xs">Recent request</span>
          </div>

          <SuspenseX fallback={<TableSkeleton />} isLoading={!fields}>
            <>
              <PaymentViewTable fields={fields!} />

              <Pagination className="text-right">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>

                  {[
                    ...Array.from({ length: Number(data?.totalFound) / limit }),
                  ].map((_, i) => (
                    <PaginationItem key={i}>
                      <Button
                        disabled={page == i + 1}
                        variant={"secondary"}
                        value={i}
                        onClick={() => handlePagination(i + 1)}
                        className="text-white"
                      >
                        {i + 1}
                      </Button>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationEllipsis className="text-white" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </>
          </SuspenseX>
        </div>
      </div>
    </div>
  );
};

export default RecentPaymenyReq;

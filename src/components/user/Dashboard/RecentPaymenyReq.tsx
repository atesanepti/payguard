"use client";
import React, { useState } from "react";
import useSWR from "swr";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,

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
      action: <PaymentAction status={p.status} paymentId={p.id} />,
    };
  });

  const handlePagination = (page: number) => {
    setPage(page);
  };

  return (
    <div className="bg-secondary rounded-lg border border-gray-700 mt-6 lg:mt-8 max-w-full w-full overflow-hidden">
      <div className="w-full ">
        <div className="p-4 lg:p-6 w-full ">
          <div className="flex items-center justify-between mb-3 lg:mb-6">
            <h2 className="text-base lg:text-lg font-semibold text-white">
              Payment Requests
            </h2>
            <span className="text-gray-400 text-xs">Recent request</span>
          </div>
          {fields?.length == 0 && (
            <span className="text-gray-500 block text-center text-sm">
              No request found
            </span>
          )}

          {fields?.length !== 0 && (
            <SuspenseX fallback={<TableSkeleton />} isLoading={!fields}>
              <>
                <PaymentViewTable fields={fields!} />

                <Pagination className="text-right">
                  <PaginationContent>
                    {[
                      ...Array.from({
                        length: Math.ceil(Number(data?.totalFound) / limit),
                      }),
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
                  </PaginationContent>
                </Pagination>
              </>
            </SuspenseX>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentPaymenyReq;

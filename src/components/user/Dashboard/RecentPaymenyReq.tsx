import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import PaymentViewTable from "@/components/PaymentViewTable";
import { VARIANT } from "@/hooks/usePaymentStatusStyle";

const RecentPaymenyReq = () => {
  const PaymentAction = () => {
    return <Button className="h-7">View</Button>;
  };

  const fields = [
    {
      title: "Marketing Campain",
      amount: 1000,
      status: VARIANT.PENDING,
      date: new Date(),
      action: <PaymentAction />,
    },
    {
      title: "Marketing Campain",
      amount: 3000,
      status: VARIANT.REJECTED,
      date: new Date(),
      action: <PaymentAction />,
    },
    {
      title: "Official Travel",
      amount: 1800,
      status: VARIANT.APPROVED,
      date: new Date(),
      action: <PaymentAction />,
    },
  ];

  return (
    <div className="bg-secondary rounded-lg border border-gray-700 mt-6 lg:mt-8 w-full">
      <div className="w-full overflow-x-auto">

        <div className="p-4 lg:p-6 w-full min-w-[500px]">
          <div className="flex items-center justify-between mb-3 lg:mb-6">
            <h2 className="text-base lg:text-lg font-semibold text-white">
              Payment Requests
            </h2>
            <span className="text-gray-400 text-xs">
              Some Recent payment request
            </span>
          </div>

          <PaymentViewTable fields={fields} />

          <div className="flex items-center justify-end ">
            <div className="flex  items-center">
              <Button variant={"link"} className="!m-0">
                <Link href="/payments" className="text-blue-600 font-semibold">
                  Show more 200
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecentPaymenyReq;

"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PAYMENT_STATUS } from "@prisma/client";

interface PaymentActionProps {
  paymentId: string;
  status: PAYMENT_STATUS;
}

const PaymentAction = ({ paymentId, status }: PaymentActionProps) => {
  return (
    <>
      <Link href={`payment/${paymentId}`}>
        <Button className="bg-[#0D92F4] hover:bg-[#0D92F4]/90 h-7">
          {status == PAYMENT_STATUS.APPROVED ? "Payment" : "View"}
        </Button>
      </Link>
    </>
  );
};

export default PaymentAction;

"use client";

import React from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import axios from "axios";
import { PaymentUpdate } from "@/types";
import { toast } from "sonner";

interface PaymentActionProps {
  paymentId: string;
}
const PaymentAction = ({ paymentId }: PaymentActionProps) => {
    
  const handleApprove = async (paymentId: string) => {
    const data: PaymentUpdate = {
      actionType: "APPROVE",
    };

    interface DataFetch {
      message: string;
      success: number;
    }

    try {
      const res = await axios.put<DataFetch>(
        `http://localhost:3000/api/admin/payment/${paymentId}`,
        data
      );
      console.log({res})
      if (!res.data.success) {
        throw new Error("Payment was not updated");
      }

      toast("Updated", {
        description: `The payment was updated for Approved`,
      });
    } catch (error) {
      console.log(error);
      toast("Failed", {
        description: `The payment was not updated for Approved`,
      });
    }
  };

  const handleReject = async (paymentId: string) => {
    const data: PaymentUpdate = {
      actionType: "REJECT",
    };

    interface DataFetch {
      message: string;
      success: number;
    }

    try {
      const res = await axios.put<DataFetch>(
        `http://localhost:3000/api/admin/payment/${paymentId}`,
        data
      );
      if (!res.data.success) {
        throw new Error("Payment was not updated");
      }

      toast("Updated", {
        description: `The payment was updated for Reject`,
      });
    } catch (error) {
      console.log(error);
      toast("Failed", {
        description: `The payment was not updated for Reject`,
      });
    }
  };


  return (
    <div className="flex gap-2 items-center">
      <Button onClick={() => handleApprove(paymentId)} className="!p-2">
        <Check className="w-4 h-4 text-white" />
      </Button>
      <Button
        onClick={() => handleReject(paymentId)}
        className="bg-red-600 hover:bg-red-600/90 !p-2"
      >
        <Check className="w-4 h-4 text-white" />
      </Button>
    </div>
  );
};

export default PaymentAction;

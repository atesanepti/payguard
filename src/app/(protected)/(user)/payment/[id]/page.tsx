"use client";
import FormBuilder from "@/components/Form";
import PaypalButtonX from "@/components/PaypalButtonX";
import { fetchData } from "@/lib/fetchData";
import { PaymentsPayloadObj } from "@/types";
import { PAYMENT_STATUS } from "@prisma/client";
import { Info } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";;
import useSWR from "swr";
import Spinner from '@/components/Spinner';

const PaypalPayMent = () => {
  const params = useParams();

  const { data } = useSWR(
    `/api/user/payment/${params.id}`,
    async (url: string) => fetchData<PaymentsPayloadObj>(url)
  );

  return (
    <div className="w-[350px] lg:w-[450px] mx-auto">
      <FormBuilder headerTitle="Payment">
        {!data && <div className="relative"><Spinner/></div>}

        {data && data.status === PAYMENT_STATUS.PENDING && (
          <div className="bg-yellow-400/15  border border-yellow-400 rounded-lg p-3 lg:p-4 flex items-center gap-3 mb-4">
            <Info className="text-yellow-400 w-4 h-4" />
            <span className="text-yellow-400 text-xs">
              Info : Your request is still under the processing, Plase wait
            </span>
          </div>
        )}
        
        {data && (
          <PaypalButtonX
            amount={data.amount}
            isDisabled={data.status === PAYMENT_STATUS.APPROVED ? false : true}
          />
        )}
      </FormBuilder>
    </div>
  );
};

export default PaypalPayMent;

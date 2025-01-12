import React from "react";

import TableField from "./TableField";
import { VARIANT } from "@/hooks/usePaymentStatusStyle";

type Fields = {
  title: string;
  amount: number;
  status: VARIANT;
  date: Date;
  action: React.ReactNode;
};

interface PaymentViewTableProps {
  fields: Array<Fields>;
}

const PaymentViewTable = ({ fields }: PaymentViewTableProps) => {
  return (
    <div >
      <table className="w-full ">
        <thead>
          <tr className="text-left text-gray-400 border-b border-gray-700">
            <th className="pb-4 font-medium text-sm">Title</th>
            <th className="pb-4 font-medium text-sm">Amount</th>
            <th className="pb-4 font-medium text-sm">Status</th>
            <th className="pb-4 font-medium text-sm">Date</th>
            <th className="pb-4 font-medium text-sm">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {fields.map((f, i) => (
            <TableField fields={f} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentViewTable;

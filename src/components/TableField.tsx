import moment from "moment";

import { cn } from "@/lib/utils";
import { VARIANT, usePaymentStatusStyle } from "@/hooks/usePaymentStatusStyle";

type Fields = {
  title: string;
  amount: number;
  status: VARIANT;
  date: Date;
  action: React.ReactNode;
};

interface TableFieldPros {
  fields: Fields;
}

const TableField = ({ fields }: TableFieldPros) => {
  const { bgColor, textColor } = usePaymentStatusStyle(fields.status);

  return (
    <tr className="border-b border-gray-700 ">
      <td className="py-2 lg:py-3 text-sm">{fields.title}</td>
      <td className="py-2 lg:py-3 text-sm">${fields.amount}</td>
      <td className="py-2 lg:py-3 text-sm">
        <span
          className={cn(
            "px-3 py-1 text-xs  bg-opacity-20  rounded-full capitalize",
            `${bgColor} ${textColor}`
          )}
        >
          {fields.status}
        </span>
      </td>
      <td className="py-2 lg:py-3 text-sm">
        {moment(fields.date).format("MMM Do YY")}
      </td>
      <td className="py-2 lg:py-3 text-sm">{fields.action}</td>
    </tr>
  );
};

export default TableField;

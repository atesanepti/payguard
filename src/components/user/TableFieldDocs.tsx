import moment from "moment";

import { cn } from "@/lib/utils";
import { FieldsDocs } from "../DocumentsViewTable";
import { FileChartColumnIncreasing } from "lucide-react";
import { useDocsStatusStyle } from "@/hooks/useDocsStatus";

interface TableFieldPros {
  fields: FieldsDocs;
}

const TableFieldDocs = ({ fields }: TableFieldPros) => {
  const { bgColor, textColor } = useDocsStatusStyle(fields.status);

  return (
    <tr className="border-b border-gray-700 ">
      <td className="py-2 lg:py-3 text-sm flex items-center gap-2">
        <FileChartColumnIncreasing className="w-4 h-5 text-blue-600" />
        {fields.document.slice(0,10)}
      </td>
      <td className="py-2 lg:py-3 text-sm uppercase">{fields.type}</td>
      <td className="py-2 lg:py-3 text-sm">
        <span
          className={cn(
            "px-3 py-1 text-xs  bg-opacity-20  rounded-full capitalize",
            `${textColor} ${bgColor}`
          )}
        >
          {fields.status}
        </span>
      </td>
      <td className="py-2 lg:py-3 text-sm hidden md:block">
        {moment(fields.date).format("MMM Do YY")}
      </td>
      {fields.action && (
        <td className="py-2 lg:py-3 text-sm">{fields.action}</td>
      )}
    </tr>
  );
};

export default TableFieldDocs;

import React from "react";

import { DOCUMENTS_STATUS } from "@prisma/client";
import TableFieldDocs from "./user/TableFieldDocs";

export type FieldsDocs = {
  document: string;
  type: string;
  status: DOCUMENTS_STATUS;
  date: Date;
  action?: React.ReactNode;
};

interface DocumentsViewTableProps {
  fields: Array<FieldsDocs>;
}

const DocumentsViewTable = ({ fields }: DocumentsViewTableProps) => {
  return (
    <div>
      <table className="w-full ">
        <thead>
          <tr className="text-left text-gray-400 border-b border-gray-700">
            <th className="pb-4 font-medium text-sm">Document</th>
            <th className="pb-4 font-medium text-sm">Type</th>
            <th className="pb-4 font-medium text-sm">Status</th>
            <th className="pb-4 font-medium text-sm hidden md:block">Date</th>
            <th className="pb-4 font-medium text-sm">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {fields?.map((f, i) => (
            <TableFieldDocs fields={f} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentsViewTable;

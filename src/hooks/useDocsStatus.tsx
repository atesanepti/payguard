import { DOCUMENTS_STATUS } from "@prisma/client";

export const useDocsStatusStyle = (variant: DOCUMENTS_STATUS) => {
  const style = {
    bgColor: `${
      variant === DOCUMENTS_STATUS.ACCEPTED
        ? "bg-green-500"
        : variant == DOCUMENTS_STATUS.PENDING
        ? "bg-yellow-500"
        : variant === DOCUMENTS_STATUS.REJECTED
        ? "bg-red-500"
        : "bg-blue-500"
    }  `,
    textColor: `${
      variant === DOCUMENTS_STATUS.ACCEPTED
        ? "text-green-500"
        : variant == DOCUMENTS_STATUS.PENDING
        ? "text-yellow-500"
        : variant === DOCUMENTS_STATUS.REJECTED
        ? "text-red-500"
        : "text-blue-500"
    }  `,
  };

  return { bgColor: style.bgColor, textColor: style.textColor };
};

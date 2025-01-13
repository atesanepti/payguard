import { PAYMENT_STATUS } from "@prisma/client";

export const usePaymentStatusStyle = (variant: PAYMENT_STATUS) => {
  const style = {
    bgColor: `${
      variant === PAYMENT_STATUS.APPROVED
        ? "bg-green-500"
        : variant == PAYMENT_STATUS.PENDING
        ? "bg-yellow-500"
        : variant === PAYMENT_STATUS.REJECTED
        ? "bg-red-500"
        : "bg-blue-500"
    }  `,
    textColor: `${
      variant === PAYMENT_STATUS.APPROVED
        ? "text-green-500"
        : variant == PAYMENT_STATUS.PENDING
        ? "text-yellow-500"
        : variant === PAYMENT_STATUS.REJECTED
        ? "text-red-500"
        : "text-blue-500"
    }  `,
  };

  return { bgColor: style.bgColor, textColor: style.textColor };
};

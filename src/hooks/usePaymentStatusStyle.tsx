export enum VARIANT {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  COMPLETED = "completed",
  ALL = "all",
}

export const usePaymentStatusStyle = (variant: VARIANT) => {
  const style = {
    bgColor: `${
      variant === VARIANT.APPROVED
        ? "bg-green-500"
        : variant == VARIANT.PENDING
        ? "bg-yellow-500"
        : variant === VARIANT.REJECTED
        ? "bg-red-500"
        : variant === VARIANT.ALL
        ? "bg-blue-500"
        : ""
    }  `,
    textColor: `${
      variant === VARIANT.APPROVED
        ? "text-green-500"
        : variant == VARIANT.PENDING
        ? "text-yellow-500"
        : variant === VARIANT.REJECTED
        ? "text-red-500"
        : variant === VARIANT.ALL
        ? "text-blue-500"
        : ""
    }  `,
  };

  return { bgColor: style.bgColor, textColor: style.textColor };
};

import { PaymentUpdate } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../../../prisma";
import { PAYMENT_STATUS } from "@prisma/client";
import { sendEmail } from "@/lib/email";

export const PUT = async (
  req: NextRequest,
  context: { params: Record<string, string> }
) => {
  const { id } = context.params;

  const { actionType }: PaymentUpdate = await req.json();

  try {
    if (actionType === "APPROVE") {
      const updatedPay = await db.payments.update({
        where: {
          id,
        },
        data: {
          status: PAYMENT_STATUS.APPROVED,
        },
        include: {
          user: true,
        },
      });

      await sendEmail(
        updatedPay.user.email,
        "Payment Approved",
        "Your payment request approved! now you can payment by PayPal"
      );
    } else if (actionType === "REJECT") {
      const updatedPay = await db.payments.update({
        where: {
          id,
        },
        data: {
          status: PAYMENT_STATUS.REJECTED,
        },
        include: {
          user: true,
        },
      });
      await sendEmail(
        updatedPay.user.email,
        "Payment Approved",
        "Your payment request approved! now you can payment by PayPal"
      );
    }

    return NextResponse.json(
      { message: "Payment updated", success: true },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Somting went wrong", success: false },
      { status: 500 }
    );
  }
};

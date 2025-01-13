import { PaymentUpdate } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../../../prisma";
import { PAYMENT_STATUS } from "@prisma/client";

export const PUT = async (
  req: NextRequest,
  context: { params: Record<string, string> }
) => {
  const { id } = context.params;

  const { actionType }: PaymentUpdate = await req.json();

  try {
    if (actionType === "APPROVE") {
      await db.payments.update({
        where: {
          id,
        },
        data: {
          status: PAYMENT_STATUS.APPROVED,
        },
      });
    } else if (actionType === "REJECT") {
      await db.payments.update({
        where: {
          id,
        },
        data: {
          status: PAYMENT_STATUS.REJECTED,
        },
      });
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

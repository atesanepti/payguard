import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../../../prisma";
import { getUser } from "@/lib/user";

export const GET = async (
  req: NextRequest,
  context: { params: Record<string, string> }
) => {
  const { id } = context.params;

  const user = await getUser();

  try {
    const payment = await db.payments.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!payment) {
      return NextResponse.json(
        { message: "payment details not found", success: false },
        { status: 404 }
      );
    }

    if (payment.user.id !== user.id) {
      return NextResponse.json(
        { message: "payment details not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Payment found", success: true, payload: payment },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Somting went wrong", success: false },
      { status: 500 }
    );
  }
};

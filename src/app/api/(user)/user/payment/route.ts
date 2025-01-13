import { NextRequest, NextResponse } from "next/server";
import { PaymentReq, PaymentsResPayload } from "@/types";

import { db } from "@/../prisma/index";
import { getUser } from "@/lib/user";

export const POST = async (req: NextRequest) => {
  const body: PaymentReq = await req.json();

  const user = await getUser();

  try {
    await db.payments.create({
      data: {
        title: body.title,
        amount: +body.amount,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    return NextResponse.json(
      {
        message: "Payment requested added",
        success: true,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { message: "Somting went wrong", success: false },
      { status: 500 }
    );
  }
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const page = +searchParams.get("page")!;
  const limit = +searchParams.get("limit")!;

  const user = await getUser();

  try {
    const payments = await db.payments.findMany({
      where: {
        user_id: user.id,
      },
      take: limit,
      skip: limit * (page - 1),
      orderBy: {
        createdAt: "desc",
      },
    });

    const totalPayment = await db.payments.count({
      where: {
        user_id: user.id,
      },
    });

    const payload: PaymentsResPayload = {
      payments,
      totalFound: totalPayment,
      currentPage: page,
    };

    return NextResponse.json(
      { message: "Payment found", success: true, payload },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Somting went wrong", success: false },
      { status: 500 }
    );
  }
};

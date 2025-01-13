import { db } from "../../../../../../prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const page = +searchParams.get("page")!;
  const limit = +searchParams.get("limit")!;

  try {
    const payments = await db.payments.findMany({
      take: limit,
      skip: limit * (page - 1),
      orderBy: {
        createdAt: "desc",
      },
    });

    const totalPayment = await db.payments.count({});

    const payload = {
      payments,
      totalFound: totalPayment,
      currentPage: page,
    };

    return NextResponse.json(
      { message: "Payments found", success: true, payload },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Somting went wrong", success: false },
      { status: 500 }
    );
  }
};

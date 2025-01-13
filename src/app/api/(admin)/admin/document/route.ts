import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../../prisma";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const page = +searchParams.get("page")!;
  const limit = +searchParams.get("limit")!;

  try {
    const documents = await db.documents.findMany({
      take: limit,
      skip: limit * (page - 1),
      orderBy: {
        createdAt: "desc",
      },
    });

    const totalDocuments = await db.documents.count({});

    const payload = {
      documents,
      totalFound: totalDocuments,
      currentPage: page,
    };

    return NextResponse.json(
      { message: "Documents found", success: true, payload },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Somting went wrong", success: false },
      { status: 500 }
    );
  }
};

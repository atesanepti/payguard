import { getUser } from "@/lib/user";
import { DocumentsReq } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../../prisma";

export const POST = async (req: NextRequest) => {
  const body: DocumentsReq = await req.json();

  const user = await getUser();

  try {
    await db.documents.create({
      data: {
        file_url: body.fileUrl,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return NextResponse.json(
      { message: "Requested", success: true },
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
    const documents = await db.documents.findMany({
      where: {
        user_id: user.id,
      },
      take: limit,
      skip: limit * (page - 1),
      orderBy: {
        createdAt: "desc",
      },
    });

    const totalDocuments = await db.documents.count({
      where: {
        user_id: user.id,
      },
    });

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

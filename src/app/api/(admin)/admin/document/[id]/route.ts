import { DocumentUpdate } from "@/types";
import { DOCUMENTS_STATUS } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../../../prisma";
import { sendEmail } from "@/lib/email";

export const GET = async (
  req: NextRequest,
  context: { params: Record<string, string> }
) => {
  const { id } = context.params;

  try {
    const document = await db.documents.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(
      { message: "Document Found", success: true, payload: document },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Somthing went wrong", success: false },
      { status: 500 }
    );
  }
};

export const PUT = async (
  req: NextRequest,
  context: { params: Record<string, string> }
) => {
  const { id } = context.params;

  const { actionType }: DocumentUpdate = await req.json();

  try {
    if (actionType === "ACCEPT") {
      const updatedDoc = await db.documents.update({
        where: {
          id,
        },
        data: {
          status: DOCUMENTS_STATUS.ACCEPTED,
        },
        include: {
          user: true,
        },
      });
      await sendEmail(
        updatedDoc.user.email,
        "Indentify Documents Accepetd",
        "We reviewed your Documents and your Document was accepted "
      );
    } else if (actionType === "REJECT") {
      const updatedDoc = await db.documents.update({
        where: {
          id,
        },
        data: {
          status: DOCUMENTS_STATUS.REJECTED,
        },
        include: {
          user: true,
        },
      });
      await sendEmail(
        updatedDoc.user.email,
        "Indentify Documents Rejected",
        "We reviewed your Documents and uour Document was rejected "
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

import { getUser } from "@/lib/user";
import { NextResponse } from "next/server";
import { db } from "../../../../../../prisma";
import { DOCUMENTS_STATUS, PAYMENT_STATUS } from "@prisma/client";

export const GET = async () => {
  const user = await getUser();

  try {
    const totalPayments = await db.payments.count({
      where: {
        user_id: user.id,
      },
    });

    const pendingPayments = await db.payments.count({
      where: {
        user_id: user.id,
        status: PAYMENT_STATUS.PENDING,
      },
    });

    const approvedPayments = await db.payments.count({
      where: {
        user_id: user.id,
        status: PAYMENT_STATUS.APPROVED,
      },
    });

    const rejectedPayments = await db.payments.count({
      where: {
        user_id: user.id,
        status: PAYMENT_STATUS.REJECTED,
      },
    });

    const totalDocuments = await db.documents.count({
      where: {
        user_id: user.id,
      },
    });

    const pendingDocuments = await db.documents.count({
      where: {
        user_id: user.id,
        status: DOCUMENTS_STATUS.PENDING,
      },
    });

    const acceptdDocuments = await db.documents.count({
      where: {
        user_id: user.id,
        status: DOCUMENTS_STATUS.ACCEPTED,
      },
    });

    const rejectedDocuments = await db.documents.count({
      where: {
        user_id: user.id,
        status: DOCUMENTS_STATUS.REJECTED,
      },
    });

    const payload = {
      payments: {
        total: totalPayments,
        pending: pendingPayments,
        approved: approvedPayments,
        rejected: rejectedPayments,
      },
      documents: {
        total: totalDocuments,
        pending: pendingDocuments,
        approved: acceptdDocuments,
        rejected: rejectedDocuments,
      },
      total: totalPayments + totalDocuments,
      pending: pendingPayments + pendingDocuments,
      approved: approvedPayments + acceptdDocuments,
      rejected: rejectedPayments + rejectedDocuments,
    };

    return NextResponse.json(
      { message: "Found", success: true, payload },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Somting went wrong", success: false },
      { status: 500 }
    );
  }
};

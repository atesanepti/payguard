import { DOCUMENTS_STATUS, PAYMENT_STATUS } from "@prisma/client";
import { db } from "../../../../../../prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const totalPayments = await db.payments.count({});

    const pendingPayments = await db.payments.count({
      where: {
        status: PAYMENT_STATUS.PENDING,
      },
    });

    const approvedPayments = await db.payments.count({
      where: {
        status: PAYMENT_STATUS.APPROVED,
      },
    });

    const rejectedPayments = await db.payments.count({
      where: {
        status: PAYMENT_STATUS.REJECTED,
      },
    });

    const totalDocuments = await db.documents.count({});

    const pendingDocuments = await db.documents.count({
      where: {
        status: DOCUMENTS_STATUS.PENDING,
      },
    });

    const acceptdDocuments = await db.documents.count({
      where: {
        status: DOCUMENTS_STATUS.ACCEPTED,
      },
    });

    const rejectedDocuments = await db.documents.count({
      where: {
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

import { Prisma } from "@prisma/client";

export interface PaymentReq {
  title: string;
  amount: string;
}
export interface DocumentsReq {
  fileUrl: string;
}
export interface PaymentUpdate {
  actionType: "REJECT" | "APPROVE";
}
export interface DocumentUpdate {
  actionType: "REJECT" | "ACCEPT";
}


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type PaymentsPayloadObj = Prisma.paymentsGetPayload<{}>
type PaymentsPayload = PaymentsPayloadObj[];

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type DocumentPayloadObj = Prisma.documentsGetPayload<{}>;
type DocumentPayload = DocumentPayloadObj[];

export interface PaymentsResPayload {
  payments: PaymentsPayload;
  totalFound: number;
  currentPage : number;
}


export interface DocumentsResPayload {
  documents: DocumentPayload;
  totalFound: number;
  currentPage: number;
}

interface PaymentsSummary {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
}

interface DocumentsSummary {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
}

export interface AnaliticsPayload {
  payments: PaymentsSummary;
  documents: DocumentsSummary;
  total: number;
  pending: number;
  approved: number;
  rejected: number;
}


export interface ChartData {
  December: number;
  November: number;
  January: number;
}
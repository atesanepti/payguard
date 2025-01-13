import { NextResponse } from "next/server";
import { db } from "../../../../../../../prisma";

export const GET = async () => {
  try {
   const today = new Date();
   const currentMonth = today.getMonth(); // Current month (0 for January, 11 for December)
   const currentYear = today.getFullYear();

   // Calculate the start and end dates for the last three months
   const startOfDecember = new Date(
     currentYear - (currentMonth < 2 ? 1 : 0),
     (currentMonth - 2 + 12) % 12,
     1
   );
   const endOfJanuary = new Date(currentYear, currentMonth + 1, 0); // End of the current month

   // Query payments created during the last three months
   const requests = await db.payments.findMany({
     where: {
       createdAt: {
         gte: startOfDecember,
         lte: endOfJanuary,
       },
     },
     select: {
       createdAt: true,
     },
   });

   // Initialize monthly counts
   const monthlyCounts: Record<string, number> = {};

   // Process the data to group by month
   requests.forEach((req) => {
     const createdAt = new Date(req.createdAt);
     const monthKey = createdAt.toLocaleString("en-US", { month: "long" }); // Get month name
     monthlyCounts[monthKey] = (monthlyCounts[monthKey] || 0) + 1;
   });

   // Ensure all three months are included in the output
   const output = ["December", "November", "January"].reduce((acc, month) => {
     acc[month] = monthlyCounts[month] || 0; // Default to 0 if no data for the month
     return acc;
   }, {} as Record<string, number>);



    return NextResponse.json(
      { message: "Found", success: true, payload : output },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Somting went wrong", success: false },
      { status: 500 }
    );
  }
};

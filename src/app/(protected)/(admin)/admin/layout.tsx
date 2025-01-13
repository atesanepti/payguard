import { getUser } from "@/lib/user";
import { ROLE } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();
  if (user.role === ROLE.USER) {
    return redirect("/dashboard");
  }

  return <div>{children}</div>;
};

export default AdminLayout;

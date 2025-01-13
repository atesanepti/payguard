import { getUser } from "@/lib/user";
import { ROLE } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();
  console.log({user})
  if (user.role === ROLE.ADMIN) {
    return redirect("/admin/dashboard");
  }

  return <div>{children}</div>;
};

export default UserLayout;

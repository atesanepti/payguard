import { getUser } from "@/lib/user";
import { ROLE } from "@prisma/client";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUser();

  if (user === ROLE.USER) {
    return redirect("/dashboard");
  }

  return redirect("/admin/dashboard");
}

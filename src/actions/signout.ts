"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const signout = async () => {
  const supabase = createClient();
  (await supabase).auth.signOut();

  redirect("/signout");
};

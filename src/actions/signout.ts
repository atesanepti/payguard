"use server"
import { createClient } from "@/utils/supabase/server";

export const signout = async () => {
  const supabase = createClient();
  (await supabase).auth.signOut();
};

"use server";
import zod from "zod";

import { signinSchema } from "@/schema";
import { createClient } from "@/utils/supabase/server";

export const signin = async (credentials: zod.infer<typeof signinSchema>) => {
  const supabase = await createClient();

  const { email, password } = credentials;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    if (error?.message) {
      return { error: error.message };
    } else {
      return { redirect: "/error" };
    }
  }

  return { success: "Logged in successfull", redirect: "/" };
};

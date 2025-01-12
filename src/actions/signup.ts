"use server";
import zod from "zod";

import { signupSchema } from "@/schema";
import { createClient } from "@/utils/supabase/server";
import { db } from "@/../prisma/index";
export const signup = async (credentials: zod.infer<typeof signupSchema>) => {
  const { email, password } = credentials;
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    
  });

  if (error || !data.user) {
    if(error?.message){
      return {error : error?.message}
    }
    return { redirect: "/error" };
  }

  await db.users.create({
    data: {
      email: data.user.email!,
    },
  });

  return { success: "New account created", redirect: "/signin" };
};

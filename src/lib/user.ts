import { extendedSupabaseClient } from "@/utils/supabase/server";

export const getUser = async () => {
  const supabase = await extendedSupabaseClient();
  const { user, error } = await supabase.auth.getCurrentUser();
  
  if (!user || error) {
    return null;
  }
  

  return user;
};

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { getUserByEmail } from "@/data/user";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            //pass
          }
        },
      },
    }
  );
}

export const extendedSupabaseClient = async () => {
  const supabase = await createClient();

  const getCurrentUser = async () => {
    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
      return { user: null, error: error || null };
    }

    const user = await getUserByEmail(data.user?.email as string);
    data.user.role = user?.role;
    
    return { user: user, error: null };
  };

  supabase.auth.getCurrentUser = getCurrentUser;

  return supabase;
};

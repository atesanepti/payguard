import { createBrowserClient } from "@supabase/ssr";
import { getUserByEmail } from "@/data/user";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export const extendedSupabaseClient = () => {
  const supabase = createClient();

  const getCurrentUser = async () => {
    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
      return { user: null, error: error?.message || null };
    }

    const user = await getUserByEmail(data.user?.email as string);
    data.user.role = user?.role;
    return { user: user, error: null };
  };

  supabase.auth.getCurrentUser = getCurrentUser;

  return supabase;
};

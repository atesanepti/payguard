import "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";

declare module "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient" {
 
  interface SupabaseAuthClient {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getCurrentUser: () => Promise<{ user: any; error: any }>;
  }
}

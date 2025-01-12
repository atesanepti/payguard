import { useState, useEffect } from "react";
import { extendedSupabaseClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

const useGetUser = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const supabase = extendedSupabaseClient();
      const { user, error } = await supabase.auth.getCurrentUser();

      if (error || !user) {
        redirect("/error");
      }

      setUser(user);
    };

    getUser();
  }, []);

  return { user };
};

export default useGetUser;

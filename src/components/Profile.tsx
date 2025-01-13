import { getUser } from "@/lib/user";
import React from "react";
import { Button } from "./ui/button";
import { signout } from "@/actions/signout";

const Profile = async () => {
  const user = await getUser();
  return (
    <div className="flex items-center justify-center flex-col">
      <span className="text-white">email : {user.email}</span>
      <form>
        <Button formAction={signout} className="mt-3">
          {" "}
          Signout{" "}
        </Button>
      </form>
    </div>
  );
};

export default Profile;

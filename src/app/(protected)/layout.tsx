import React from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import AsideMenu from "@/components/user/AsideMenu";
import Link from "next/link";
import { User } from "lucide-react";
import { getUser } from "@/lib/user";
import SideBar from "@/components/SideBar";
import HamburgerMenu, { HamburgerMenuRole } from "@/components/HamburgerMenu";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();

  return (
    <div className="flex min-h-screen ">
      <div className="hidden md:flex">
        <AsideMenu />
      </div>

      <SideBar>
        <AsideMenu />
      </SideBar>

      <div className="flex-1 flex flex-col ">
        <header className="bg-secondary border-b border-gray-700">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex gap-5 items-center">
              <HamburgerMenu role={HamburgerMenuRole.OPEN} />
              <h3 className="text-xl font-semibold text-white">Dashboard</h3>
            </div>
            <Link href={"/setting"} className="flex gap-3 items-center">
              <Avatar>
                <AvatarFallback>
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-white">
                {user?.email.substring(0, user?.email.length - 10)}
              </span>
            </Link>
          </div>
        </header>
        <div className="bg-primary p-3 lg:p-6">{children}</div>
      </div>
    </div>
  );
};

export default ProtectedLayout;

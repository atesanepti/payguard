"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/zustand";
import HamburgerMenu, { HamburgerMenuRole } from "./HamburgerMenu";

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar = ({ children }: SideBarProps) => {
  const isSidebarShow = useStore((state) => state.isSidebarShow);
  const toggleSideBar = useStore((state) => state.toggleSideBar);
  return (
    <div
      className={cn(
        "md:hidden top-0 fixed z-20 transition-all",
        `${isSidebarShow ? "left-0" : "-left-[100%]"}`
      )}
    >
      {children}

      <div
        onClick={toggleSideBar}
        className={cn(
          "w-full h-screen fixed top-0  -z-10 bg-black/25 transition-opacity",
          `${isSidebarShow ? "opacity-100" : "opacity-50"}`
        )}
      >
        <div
          className={cn(
            "absolute  top-6 z-10",
            `${isSidebarShow ? "left-0" : "left-[65%]"}`
          )}
        >
          <HamburgerMenu role={HamburgerMenuRole.CLOSE} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

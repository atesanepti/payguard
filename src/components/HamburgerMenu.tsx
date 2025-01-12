"use client"
import { useStore } from "@/store/zustand";
import { SquareChevronRight, SquareChevronLeft } from "lucide-react";
import React from "react";

export enum HamburgerMenuRole {
    OPEN = "open",
    CLOSE = "close"
}

interface HamburgerMenu {
    role : HamburgerMenuRole
}

const HamburgerMenu = ({ role }: HamburgerMenu) => {
  const isSidebarShow = useStore((state) => state.toggleSideBar);

  if(role === HamburgerMenuRole.CLOSE){
    <SquareChevronLeft
      onClick={isSidebarShow}
      className="text-white cursor-pointer w-5 h-5 md:hidden"
    />;
  }
  return (
    <SquareChevronRight
      onClick={isSidebarShow}
      className="text-white cursor-pointer w-5 h-5 md:hidden"
    />
  );
};

export default HamburgerMenu;

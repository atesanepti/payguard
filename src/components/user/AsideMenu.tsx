import Link from "next/link";
import React from "react";

import { LayoutDashboard, Banknote, FileText, Settings } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import AccordionMenu from "./AccordionMenu";

const AsideMenu = () => {
  return (
    <aside className="w-64 bg-secondary border-r border-gray-700 flex-shrink-0 min-h-screen">
      <nav className="pt-8">
        <div className="px-4 space-y-2">
          <Link
            href="#"
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg"
          >
            <LayoutDashboard className="w-4 h-4 mr-3" />
            <span className="text-sm">Dashboard</span>
          </Link>

          <Accordion type="single" collapsible>
            <AccordionMenu
              value="item-1"
              trigger={
                <>
                  <div className="flex items-center">
                    <Banknote className="w-5 h-5 mr-3" size={18} />
                    <span className="text-sm">Payment Requests</span>
                  </div>
                </>
              }
            >
              <Link
                href="#"
                className="block px-4 py-2 text-xs text-gray-400 hover:text-gray-300"
              >
                Create Request
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-xs text-gray-400 hover:text-gray-300"
              >
                View Requests
              </Link>
            </AccordionMenu>

            <AccordionMenu
              value="item-2"
              trigger={
                <>
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-3" />
                    <span className="text-sm">Documents</span>
                  </div>
                </>
              }
            >
              <Link
                href="#"
                className="block px-4 py-2 text-xs text-gray-400 hover:text-gray-300"
              >
                Verify Documents
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-xs text-gray-400 hover:text-gray-300"
              >
                View Documents
              </Link>
            </AccordionMenu>
          </Accordion>

          <Link
            href="#"
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg"
          >
            <Settings className="w-4 h-4 mr-3" />
            <span className="text-sm">Setting</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default AsideMenu;

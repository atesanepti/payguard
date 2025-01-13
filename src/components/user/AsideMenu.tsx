import Link from "next/link";
import React from "react";

import { LayoutDashboard, Banknote, Settings, FileText } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import AccordionMenu from "./AccordionMenu";
import { getUser } from "@/lib/user";
import { ROLE } from "@prisma/client";

const AsideMenu = async () => {
  const user = await getUser();
  return (
    <aside className="w-64 bg-secondary border-r border-gray-700 flex-shrink-0 min-h-screen">
      <nav className="pt-8">
        <div className="px-4 space-y-2">
          <Link
            href={`${
              user.role == ROLE.ADMIN ? "/admin/dashboard" : "/dashboard"
            }`}
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg"
          >
            <LayoutDashboard className="w-4 h-4 mr-3" />
            <span className="text-sm">Dashboard</span>
          </Link>

          {user.role !== ROLE.ADMIN && (
            <Accordion type="single" collapsible>
              <AccordionMenu
                value="item-1"
                trigger={
                  <>
                    <div className="flex items-center">
                      <Banknote className="w-5 h-5 mr-3" size={18} />
                      <span className="text-sm"> Requests</span>
                    </div>
                  </>
                }
              >
                <Link
                  href="/new-payment"
                  className="block px-4 py-2 text-xs text-gray-400 hover:text-gray-300"
                >
                  Create Request
                </Link>
                <Link
                  href="/new-documents"
                  className="block px-4 py-2 text-xs text-gray-400 hover:text-gray-300"
                >
                  Verify Indentity
                </Link>
              </AccordionMenu>
            </Accordion>
          )}

          {user.role === ROLE.ADMIN && (
            <Link
              href="/admin/payments"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg"
            >
              <Banknote className="w-4 h-4 mr-3" />
              <span className="text-sm">Payments</span>
            </Link>
          )}

          {user.role === ROLE.ADMIN && (
            <Link
              href="/admin/documents"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg"
            >
              <FileText className="w-4 h-4 mr-3" />
              <span className="text-sm">Documents</span>
            </Link>
          )}

          <Link
            href="/setting"
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

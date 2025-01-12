"use client";
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  value: string;
}
const AccordionMenu = ({ trigger, children, value }: AccordionMenuProps) => {
  return (
    <>
      <AccordionItem value={value}>
        <AccordionTrigger>{trigger}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </>
  );
};



export default AccordionMenu;

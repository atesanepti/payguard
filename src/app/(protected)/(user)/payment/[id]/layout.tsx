"use client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import React from "react";
const PaypalPaymentLayout = ({ children }: { children: React.ReactNode }) => {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT!;

  return (
    <div>
      <PayPalScriptProvider options={{ clientId: clientId }}>
        {children}
      </PayPalScriptProvider>
    </div>
  );
};

export default PaypalPaymentLayout;

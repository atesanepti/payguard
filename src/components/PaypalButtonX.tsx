/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";

interface PaypalButtonXProps {
  amount: number;
  isDisabled: boolean;
}
const PaypalButtonX = ({ amount, isDisabled }: PaypalButtonXProps) => {
  const handleApprove = (orderId: any) => {
    console.log("Order approved:", orderId);
    // Optionally send orderId to your server to capture payment
  };

  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [{ amount: { value: amount.toString() } }],
      })
      .then((orderId: string | any) => {
        return orderId;
      });
  };

  const onApprove = (data: any, actions: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return actions.order.capture().then((details: any) => {
      handleApprove(data.orderID);
    });
  };

  return (
    <div>
      <PayPalButtons
        disabled={isDisabled}
        style={{ layout: "vertical" }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={(err) => {
          console.error("PayPal Checkout Error:", err);
        }}
      />
    </div>
  );
};

export default PaypalButtonX;

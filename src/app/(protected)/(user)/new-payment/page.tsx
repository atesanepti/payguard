import FormBuilder from "@/components/Form";
import PaymentForm from "@/components/user/PaymentForm";
import React from "react";

const NewPayment = () => {
  return (
    <div className="min-h-screen w-full flex  justify-center">
      <FormBuilder
        headerText="Please fill in the details below"
        headerTitle="Payment Request"
      >
        <PaymentForm />
      </FormBuilder>
    </div>
  );
};

export default NewPayment;

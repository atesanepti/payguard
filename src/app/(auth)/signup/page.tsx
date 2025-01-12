import React from "react";

import SignupForm from "@/components/auth/SignupForm";
import FormBuilder from "@/components/auth/Form";

const Signup = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <FormBuilder
        headerTitle="Create Your account"
        headerText="Join to us and start your journey"
      >
        <SignupForm />
      </FormBuilder>
    </div>
  );
};

export default Signup;

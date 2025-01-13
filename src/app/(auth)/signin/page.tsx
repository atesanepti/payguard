import React from "react";

import SigninForm from "@/components/auth/SigninForm";
import FormBuilder from "@/components/Form";

const Signin = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <FormBuilder
        headerTitle="Login"
        headerText="Please Enter your details to login"
      >
        <SigninForm />
      </FormBuilder>
    </div>
  );
};

export default Signin;

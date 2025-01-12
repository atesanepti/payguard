import React from "react";
import type { Metadata } from "next";

interface SignupLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Signup",
  description: "Create an account",
};

const SignupLayout = ({ children }: SignupLayout) => {
  return <>{children}</>;
};

export default SignupLayout;

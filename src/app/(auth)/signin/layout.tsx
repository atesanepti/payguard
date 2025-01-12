import React from "react";
import type { Metadata } from "next";

interface SigninLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Signin",
  description: "Login account",
};

const SignupLayout = ({ children }: SigninLayout) => {
  return <>{children}</>;
};

export default SignupLayout;

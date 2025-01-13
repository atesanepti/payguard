import React from "react";

interface SuspenseXPros {
  fallback: React.ReactNode;
  children: React.ReactNode;
  isLoading: boolean;
}
const SuspenseX = ({ fallback, children, isLoading }: SuspenseXPros) => {
  if (isLoading) {
    return <>{fallback}</>;
  } else if (!isLoading) {
    return <>{children}</>;
  }
};

export default SuspenseX;

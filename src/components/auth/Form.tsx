import React from "react";

interface FormProps {
  children: React.ReactNode;
  headerTitle?: string;
  headerText?: string;
}
const FormBuilder = ({ children, headerTitle, headerText }: FormProps) => {
  return (
    <div className="w-[280px] lg:w-[330px]">
      <div className="my-4 text-center">
        {headerTitle && (
          <h3 className="text-white text-2xl font-bold">{headerTitle}</h3>
        )}
        <span className="text-sm text-muted-foreground">{headerText}</span>
      </div>

      <div className="w-full bg-secondary p-4 lg:p-6 rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
};

export default FormBuilder;

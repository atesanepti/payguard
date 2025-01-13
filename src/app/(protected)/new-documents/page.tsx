import FormBuilder from "@/components/Form";
import DocumentForm from "@/components/user/DocumentForm";
import React from "react";

const NewDocument = () => {
  return (
    <div className="min-h-screen w-full flex  justify-center">
      <FormBuilder
        headerTitle="Doucment Verification"
        headerText="Update your indentity documents for verification "
      >
        <DocumentForm />
      </FormBuilder>
    </div>
  );
};

export default NewDocument;

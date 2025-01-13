import FormBuilder from "@/components/Form";
import Profile from "@/components/Profile";
import React from "react";

const Setting = () => {
  return (
    <div className="flex justify-center">
      <FormBuilder >
        <Profile />
      </FormBuilder>
    </div>
  );
};

export default Setting;

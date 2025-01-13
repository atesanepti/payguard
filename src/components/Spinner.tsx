import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <ClipLoader size={35} color="#fffff" loading={true} className=" text-white"/>
    </div>
  );
};

export default Spinner;

// GeneratedPassword.js
import React from "react";

const GeneratedPassword = ({ password }) => {
  return (
    <div className="flex mb-12 flex-col">
      <h2 className="font-semibold mb-4 ml-4 text-xl ">
        Generated Password :{" "}
      </h2>
      <p className="ml-2  bg-white rounded-full p-4 h-16 w-96 flex items-center justify-center">
        {password}
      </p>
    </div>
  );
};

export default GeneratedPassword;
